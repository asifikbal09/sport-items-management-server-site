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


const getAllBranch = catchAsync(async (req, res) => {
  const result = await BranchServices.getAllBranchFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All branch retrieve successfully.',
    data: result,
  });
});

const getSingleBranch = catchAsync(async (req, res) => {
  const {branchId} = req.params
  console.log(branchId)
  const result = await BranchServices.getSingleBranchFromDB(branchId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single branch retrieve successfully.',
    data: result,
  });
});

export const BranchControllers = {
  createBranch,
  getAllBranch,
  getSingleBranch
};
