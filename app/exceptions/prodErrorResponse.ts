export const prodErrorResponse = (err,res) => {
    if (err.isOperational) {
         res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            error: err,
        });
    } else {
        // 1) Log errors
        console.error("ERROR", err);

        // 2) Send generic message
         res.status(500).json({
            status: "error",
            message: "Something went very wrong!",
        });
    }
};