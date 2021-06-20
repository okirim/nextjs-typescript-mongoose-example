import {NextApiRequest, NextApiResponse, NextApiHandler} from "next";
import {User} from "../../models/users/users.model";
import {AppError} from "../../app/exceptions/AppError";
import {CatchAsync} from "../../app/exceptions/CatchAsync";
import database_connection from "../../app/database/connection";
import {AppResponse} from "../../app/response/AppResonse";
import {UserAttrs, UserDocument} from "../../models/users/users.schema";
import {Password} from "../../app/helpers/Password";
import {getSession} from "next-auth/client";


export const changePassword = CatchAsync(async (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => {
    await database_connection();
    const {password, newPassword} = req.body;
    if (!newPassword || !password) {
        throw new AppError('password and new password are required', 400)
    }
    const session = await getSession({req})
    if (!session) {
        throw new AppError('Not Authenticated', 401)
    }
    const email = session?.user?.email!
    if (!email) {
        throw new AppError('Not Authenticated', 401)
    }
    const user = await User.findOne({
        email,
    }) as UserDocument
    if (!user) {
        throw new AppError("user doesn't exists", 400);
    }
    const checkPassword = await Password.compare(user.password, password);
    if (!checkPassword) {
        throw new AppError('invalid password');
    }
    AppResponse<UserAttrs>(res, user, 201)
})

