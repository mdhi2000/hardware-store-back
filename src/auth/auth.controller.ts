import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Req() req: Request, @Res() res: Response): Promise<any> {
    return await this.authService.login(req, res);
  }

  @Get('/logout')
  logout(@Res() res: Response): Promise<any> {
    return this.authService.logout(res);
  }

  @Get('/refresh')
  refresh(@Req() req: Request, @Res() res: Response): Promise<any> {
    const refreshToken = req.cookies.refreshToken;
    return this.authService.refreshLogin(refreshToken, res);
  }
}
