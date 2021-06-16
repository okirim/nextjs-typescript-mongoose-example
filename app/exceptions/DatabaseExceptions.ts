import { AppError } from './AppError';
/*
  @cast  error
*/
export const handleCastErrorDB = (err:any) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};
/*
  @duplication field error
*/
export const handleDuplicateFieldsDB = (err: any) => {

    const value = Object.keys(err.keyValue);
    //  console.log(value);

    const message = `${value} already exists. Please use another value!`;
    return new AppError(message, 400);
};
/*
  @ validation error
*/
export const handleValidationErrorDB = (err: any) => {

    const errors = Object.values(err.errors).map((el:any) => el.message);

    const message = `Invalid input data. ${errors.join(". ")}`;
    return new AppError(message, 400);

};