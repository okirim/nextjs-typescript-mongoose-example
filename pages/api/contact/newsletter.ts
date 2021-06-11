import { NextApiRequest, NextApiResponse } from 'next';
import { CommentCreateDto } from '../../../app/validations/comments/comments.dto';


const validateCreateComment = (data: CommentCreateDto)=>{
    return data;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const validate = validateCreateComment({ body: req.body.name })
    console.log(validate)
    
  try {
      if (req.method === 'POST') {
          res.status(201).json({ name: validate });
      }
  } catch (error) {
      res.status(500).json({error})
  }
}