import { TBranch } from './branch.interface';
import { Branch } from './branch.model';

const createBranchIntoDB = async (payload: TBranch) => {
  const result = await Branch.create(payload);
  return result;
};

const getAllBranchFromDB = async () => {
  const result = await Branch.find();
  return result;
};

const getSingleBranchFromDB = async (id: string) => {
  const result = await Branch.findById(id);
  return result;
};

export const BranchServices = {
  createBranchIntoDB,
  getAllBranchFromDB,
  getSingleBranchFromDB,
};
