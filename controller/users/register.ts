import {NextApiRequest, NextApiResponse,NextApiHandler} from "next";
import {User} from "../../models/users/users.model";
import {AppError} from "../../app/exceptions/AppError";
import {CatchAsync} from "../../app/exceptions/CatchAsync";
import database_connection from "../../app/database/connection";


export const register= CatchAsync(async(req:NextApiRequest,res:NextApiResponse,next:NextApiHandler)=>{
    await database_connection();
    const {email,password,name}=req.body;
    if(!email){

        throw new AppError('email field is required',400)
    }
    
    const created_at=(new Date).toISOString();
    await failIfUserExists(email as string)
    const user=await User.create({
        email,
        name,
        password,
        created_at
    })
    res.status(201).send({user})
})

export const failIfUserExists= async(email:string)=>{
    const user=await User.findOne({email});
    if(user){
        throw new AppError('user already exists',400);
    }
}