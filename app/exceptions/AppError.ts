export class AppError extends Error {
    public status: string;
    public isOperational: boolean;
    public statusCode: number;

    constructor(public message: string, statusCode: number=500) {
        super(message)
        this.statusCode = statusCode;
        this.status = 'error'
        this.isOperational = true;
        Object.setPrototypeOf(this, AppError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }

}
