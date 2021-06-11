import { NextApiRequest, NextApiResponse } from 'next';
import { Comment } from "../../models/comments/comments.model";

const createComment = async (req: NextApiRequest, res: NextApiResponse) => {

    const comment = await Comment.create(req.body.body)
    res.status(201).json({ comment})
}

export default createComment;