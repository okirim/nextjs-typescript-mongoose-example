
import { NextApiRequest, NextApiResponse } from 'next';
import getComments from '../../../controller/comments/getComments';
import database_connection from "../../../app/database/connection";
import nc from 'next-connect'
import { onError } from '../../../app/exceptions/HandleErrors';

const handler = nc<NextApiRequest, NextApiResponse>({ onError});

database_connection();
 
handler.get('/api/comments',getComments)
handler.post('/api/comments',getComments)


export default handler


