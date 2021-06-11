export const devErrorResponse = (err, res) => {

     res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
}