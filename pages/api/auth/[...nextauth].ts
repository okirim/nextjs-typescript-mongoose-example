import { NextApiRequest } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import database_connection from "../../../app/database/connection";
import { AppError } from "../../../app/exceptions/AppError";
import { Password } from "../../../app/helpers/Password";
import {IAuthUser, IUser} from "../../../app/types/app.types";
import { User } from "../../../models/users/users.model";
import { UserDocument } from "../../../models/users/users.schema";
import {Awaitable} from "next-auth/internals/utils";
import {ObjectId} from "mongoose";


export default NextAuth({
    session:{
        jwt:true
    },
    providers:[
        Providers.Credentials({
            async authorize(credentials: Record<keyof IUser, string>, req: NextApiRequest){
                await database_connection();
                const {email,password}=credentials;


                if(!email || !password){

                    throw new AppError('email and password are required',400)
                }

                const user=await User.findOne({
                    email,
                }).select('+password') as UserDocument

                if(!user){
                    throw new AppError("user not found",400);
                }
                const checkPassword=await Password.compare(user.password,password);
                if(!checkPassword){
                    throw new AppError('invalid password');
                }
  
                return {id:user._id,
                    name:user.name,
                    email:user.email,
                    created_at:user.created_at};
            }
        })
    ],

})

