import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect'
import database_connection from '../../../app/database/connection';
import { onError } from '../../../app/exceptions/HandleErrors';
import {login} from "../../../controller/users/login";

const handler = nc<NextApiRequest, NextApiResponse>({ onError});




handler.post('/api/users',login)
// handler.post('/api/register',getComments)


export default handler
