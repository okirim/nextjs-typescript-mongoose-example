
import { NextApiHandler, NextApiRequest } from 'next';
import { ErrorHandler } from 'next-connect';
import { handleCastErrorDB, handleDuplicateFieldsDB, handleValidationErrorDB } from './DatabaseExceptions';
import { devErrorResponse } from './devErrorResponse';
import { prodErrorResponse } from './prodErrorResponse';


export const onError = (err, req, res,next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";     

    if (process.env.NODE_ENV === "development") {

        return devErrorResponse(err, res);
    }
    else if (process.env.NODE_ENV == "production") {
        //others errors
        let error = { ...err }
        // console.log(`---------------${err.name}--------------`)
        if (err.name === "CastError") error = handleCastErrorDB(error); //invalid ID
        if (err.code === 11000) error = handleDuplicateFieldsDB(error); //duplicate database field 
        if (err.name === "ValidationError") error = handleValidationErrorDB(error);   //validation error 

        return   prodErrorResponse(error, res);

    };
}