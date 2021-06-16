import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import FilterRequest from 'nice-query';
import { CommentDocument } from "../../models/comments/comments.schema";
import { Comment } from "../../models/comments/comments.model";
import { CatchAsync } from '../../app/exceptions/CatchAsync';
import {PAGINATION} from "../../app/constants/app.constant";
import database_connection from "../../app/database/connection";

const getComments = CatchAsync(async (req: NextApiRequest, res: NextApiResponse) => {
    await database_connection();
    const filter_request = new FilterRequest<CommentDocument>({ ...req.query }, Comment.find({}));
    filter_request
        .filter()
        .select()
        .paginate(PAGINATION);
    const comments = await filter_request.collection;
    res.status(200).json({ comments })
})

export default getComments;