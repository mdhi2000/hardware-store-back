import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schema/user.schema';
import { createSHA512Hash } from '@utils/hash';
import { setRefreshToken, tradeToken, verifyToken } from 'src/utils/jwt';
import { COOKIE_JWT_URL } from '@utils/environments';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async login(req: Request, res: Response): Promise<any> {
    const medicalCode = req.body.medicalCode;
    const password = req.body.password;
    const foundUser = await this.userModel.findOne({ medicalCode });
    if (foundUser && foundUser.password === createSHA512Hash(password)) {
      const { accessToken, refreshToken } = await tradeToken(foundUser);
      setRefreshToken(res, refreshToken);
      return res.send({ accessToken });
    }
    throw new HttpException('User Not Found', HttpStatus.UNAUTHORIZED);
  }

  async logout(res: Response): Promise<any> {
    return res
      .clearCookie('refreshToken', {
        path: '/',
        httpOnly: true,
        domain: COOKIE_JWT_URL,
        sameSite: 'none',
        secure: true,
      })
      .redirect('/');
  }

  async refreshLogin(refreshToken: string, res: Response): Promise<any> {
    return verifyToken(refreshToken, 'refreshToken').then(
      async (currentUser) => {
        if (currentUser) {
          const foundUser = await this.userModel.findOne({ _id: currentUser });
          const { accessToken, refreshToken } = await tradeToken(foundUser);
          setRefreshToken(res, refreshToken);
          return res.send({ accessToken });
        }
        throw new HttpException('Unauthorized Access', HttpStatus.FORBIDDEN);
      },
    );
  }
}
