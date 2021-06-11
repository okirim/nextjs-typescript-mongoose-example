import { AppError } from './AppError';



export const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};
/*
  @duplication field error
*/
export const handleDuplicateFieldsDB = (err) => {

    const value = Object.keys(err.keyValue);
    //  console.log(value);

    const message = `${value} already exists. Please use another value!`;
    return new AppError(message, 400);
};
/*
  @ validation error
*/
export const handleValidationErrorDB = (err) => {

    const errors = Object.values(err.errors).map((el:Error) => el.message);

    const message = `Invalid input data. ${errors.join(". ")}`;
    return new AppError(message, 400);

};