import config from '../config';
import { USER_ROLE } from '../modules/user/user.constant';
import { IUser } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';

/*
export interface IUser {
  email: string;
  role: 'super-admin' | 'manager' | 'seller';
  password: string;
  needsPasswordChange: boolean;
  status: 'active' | 'blocked';
  isDeleted: boolean;
}
*/

const superAdminData: IUser = {
  email: 'asifikbal662@gmail.com',
  role: 'super-admin',
  password: config.super_admin_password as string,
  needsPasswordChange: false,
  status: 'active',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExist = await User.find({ role: USER_ROLE.SUPER_ADMIN })
  if (isSuperAdminExist.length ==0) {
      await User.create(superAdminData);
    
  }
};

export default seedSuperAdmin;
