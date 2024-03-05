import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const info = req.body;
  const result = await AuthServices.loginUser(info);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Loged in successfully.',
    data: { accessToken: result },
  });
});

export const AuthControllers = {
  loginUser,
};
