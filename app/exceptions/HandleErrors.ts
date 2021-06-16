
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { handleCastErrorDB, handleDuplicateFieldsDB, handleValidationErrorDB } from './DatabaseExceptions';
import { devErrorResponse } from './devErrorResponse';
import { prodErrorResponse } from './prodErrorResponse';
import {AppError} from "./AppError";



export const onError = (err:any, req:NextApiRequest, res:NextApiResponse,next:NextApiHandler) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";     

    if (process.env.NODE_ENV === "development") {

        return devErrorResponse(err, res);
    }
    else if (process.env.NODE_ENV == "production") {
        //others errors
        //mongoose errors
        let error;
        if (err.name === "CastError") error = handleCastErrorDB(err); //invalid ID
        if (err.code === 11000) error = handleDuplicateFieldsDB(err); //duplicate database field
        if (err.name === "ValidationError") error = handleValidationErrorDB(err);   //validation error

        return   prodErrorResponse(error as AppError, res);

    };
}