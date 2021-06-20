import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect'
import { onError } from '../../../app/exceptions/HandleErrors';
import { changePassword } from '../../../controller/users/changePassword';


const handler = nc<NextApiRequest, NextApiResponse>({ onError});



// endpoint: /api/users/change-password
handler.patch(changePassword);

export default handler
