import {NextApiResponse} from "next";

type STATUS='success' | 'error' | 'fail';
export interface AppResponseType {
    status: STATUS,
    [key: string]:unknown
}

export function AppResponse<T>(res: NextApiResponse<AppResponseType>, data: T, statusCode: number = 200, status: STATUS = 'success') {
    res.status(statusCode).send({
        status:status,
        data
    })
}
export function AppErrorResponse(res: NextApiResponse<AppResponseType>, message: string, statusCode: number = 400, status: STATUS = 'error') {
    res.status(statusCode).send({
        status,
        message
    })
}