import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './Dtos/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiBody({
    description: 'login route using username and password',
    type: LoginDto,
  })
  @ApiOkResponse({
    description: 'returns access token and sets refresh token in cookies',
  })
  async login(@Req() req: Request, @Res() res: Response): Promise<any> {
    return await this.authService.login(req, res);
  }

  @ApiOkResponse({
    description: 'logs out the user and redirect to / route',
  })
  @Get('/logout')
  logout(@Res() res: Response): Promise<any> {
    return this.authService.logout(res);
  }

  @ApiOkResponse({
    description:
      'if refresh token is valid, regenerates access and refresh token and returns new accessToken alongside setting new refreshToken in cookies',
  })
  @ApiHeader({
    name: 'Authorization',
    description: 'access token in form of: "Bearer {token}"',
  })
  @Get('/refresh')
  refresh(@Req() req: Request, @Res() res: Response): Promise<any> {
    const refreshToken = req.cookies.refreshToken;
    return this.authService.refreshLogin(refreshToken, res);
  }
}
