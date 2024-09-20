import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import cookieParser from 'cookie-parser';
import sendResponse from './app/utils/sendResponse';
import httpStatus from 'http-status';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

//application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
    sendResponse(res,{
        success:true,
        statusCode: httpStatus.OK,
        message:"Welcome to our Sports item management server site."
    })
});

//application error handler
app.use(globalErrorHandler);

export default app;
