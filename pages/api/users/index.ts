import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect'
import database_connection from '../../../app/database/connection';
import { onError } from '../../../app/exceptions/HandleErrors';
import { getUsers } from '../../../controller/users/getUsers';
import {login} from "../../../controller/users/login";

const handler = nc<NextApiRequest, NextApiResponse>({ onError});



//@endpoint /api/users
handler.get(getUsers)



export default handler
