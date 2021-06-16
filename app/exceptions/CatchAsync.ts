import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

 type FN = (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => any;
export const CatchAsync = (fn: FN) => (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => fn(req, res, next).catch(next)
