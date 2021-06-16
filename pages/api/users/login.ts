import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect'
import database_connection from '../../../app/database/connection';
import { onError } from '../../../app/exceptions/HandleErrors';
import {register} from "../../../controller/users/register";

const handler = nc<NextApiRequest, NextApiResponse>({ onError});



// endpoint: /api/users/login
handler.post(register);

export default handler
