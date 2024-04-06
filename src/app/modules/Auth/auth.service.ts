import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import AppError from '../../errors/AppError';
import { createToken } from './auth.utils';
import config from '../../config';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  const jwtPayload = {
    id:user._id,
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.token_secret,
    config.token_expiration_time
  )

  const refreshToken = createToken(
    jwtPayload,
    config.refresh_token_secret,
    config.refresh_token_expiration_time
  )



  return {accessToken,refreshToken};
};

export const AuthServices = {
  loginUser,
};
