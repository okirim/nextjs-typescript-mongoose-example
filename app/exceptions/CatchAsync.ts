export const CatchAsync = (fn) => (req, res, next) => fn(req, res,next).catch(next)
