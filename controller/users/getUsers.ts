import {NextApiRequest, NextApiResponse} from "next";
import {User} from "../../models/users/users.model";

import {CatchAsync} from "../../app/exceptions/CatchAsync";
import database_connection from "../../app/database/connection";
import {AppResponse} from "../../app/response/AppResonse";
import {UserAttrs, UserDocument} from "../../models/users/users.schema";
import RequestFilter from 'nice-query';


export const getUsers= CatchAsync(async(req:NextApiRequest,res:NextApiResponse)=>{
    await database_connection();
     const usersFilter=new RequestFilter<UserDocument>({...req.query},User.find({}));
     const users=await usersFilter.filter().select().sort().paginate(10).collection;
    // const users=await User.find({});
    AppResponse<UserAttrs[]>(res,users,201)
})

