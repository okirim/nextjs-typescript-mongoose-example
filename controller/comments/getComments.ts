import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import FilterRequest from 'nice-query';
import { CommentDocument } from "../../models/comments/comments.schema";
import { Comment } from "../../models/comments/comments.model";
import { CatchAsync } from '../../app/exceptions/CatchAsync';
import { AppError } from '../../app/exceptions/AppError';

const getComments = CatchAsync(async (req: NextApiRequest, res: NextApiResponse,next:NextApiHandler) => {
    
    const filter_request = new FilterRequest<CommentDocument>({ ...req.query }, Comment.find({}));
    filter_request
        .filter()
        .select()
        .paginate(1);
    const comments = await filter_request.collection;
   
    res.status(200).json({ comments })
})

export default getComments;