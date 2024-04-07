import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BranchServices } from './branch.service';

const createBranch = catchAsync(async (req, res) => {
  const result = await BranchServices.createBranchIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'New branch created successfully',
    data: result,
  });
});

export const BranchControllers = {
  createBranch,
};
