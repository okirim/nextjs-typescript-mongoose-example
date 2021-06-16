import {NextApiRequest, NextApiResponse,NextApiHandler} from "next";
import {User} from "../../models/users/users.model";
import {AppError} from "../../app/exceptions/AppError";
import {CatchAsync} from "../../app/exceptions/CatchAsync";
import database_connection from "../../app/database/connection";


export const login= CatchAsync(async(req:NextApiRequest,res:NextApiResponse,next:NextApiHandler)=>{
    await database_connection();
    const {email,password}=req.body;
    if(!email || !password){
      
        throw new AppError('email or password empty',400)
    }
    await failIfUserExists(email as string)
   const user=await User.create({
       email,
       password,
   })
})

export const failIfUserExists= async(email:string)=>{
    const user=await User.findOne({email});
    if(user){
       throw new AppError('user already exists',400);
    }
}