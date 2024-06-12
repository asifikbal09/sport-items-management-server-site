import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await UserServices.createUserIntoDB(user);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User created successfully.',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {

  const result = await UserServices.getAllUserFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All user successfully.',
    data: result,
  });
});

const createManager=catchAsync(async(req,res)=>{

  const {password,manager} =req.body;
  console.log({password,manager})
  const result = await UserServices.createManagerIntoDB(password,manager)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Manager created successfully.',
    data: result,
  });

})

const createSeller=catchAsync(async(req,res)=>{

  const {password,manager} =req.body;
  console.log({password,manager})
  const result = await UserServices.createSellerIntoDB(password,manager)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Seller created successfully.',
    data: result,
  });

})

export const UserControllers = {
  createUser,
  getAllUser,
  createManager,
  createSeller
};
