import { TBranch } from './branch.interface';
import { Branch } from './branch.model';

const createBranchIntoDB = async (payload: TBranch) => {
  const result = await Branch.create(payload);
  return result;
};

export const BranchServices = {
  createBranchIntoDB,
};
