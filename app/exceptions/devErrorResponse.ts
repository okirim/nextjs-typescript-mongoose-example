import { NextApiResponse } from "next";
import { AppError } from "./AppError";

export const devErrorResponse = (err: AppError, res: NextApiResponse) => {

     res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
}