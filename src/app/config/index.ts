import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV:process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.SALT_ROUND,
  token_secret: process.env.JWT_SECRET_ACCESS_TOKEN as string,
  token_expiration_time: process.env.JWT_EXPIRE_DATE as string,
  refresh_token_secret: process.env.JWT_SECRET_REFRESH_TOKEN as string,
  refresh_token_expiration_time: process.env.JWT_REFRESH_EXPIRE_DATE as string,
  super_admin_password:process.env.SUPER_ADMIN_PASSWORD
};
