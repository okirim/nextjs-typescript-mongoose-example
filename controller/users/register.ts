import {NextApiRequest, NextApiResponse,NextApiHandler} from "next";
import {User} from "../../models/users/users.model";
import {AppError} from "../../app/exceptions/AppError";
import {CatchAsync} from "../../app/exceptions/CatchAsync";
import database_connection from "../../app/database/connection";
import {Password} from "../../app/helpers/Password";
import {UserAttrs, UserDocument} from "../../models/users/users.schema";
import {dateNow} from "../../app/helpers/DateFormat";


export const register= CatchAsync(async(req:NextApiRequest,res:NextApiResponse,next:NextApiHandler)=>{
    await database_connection();
    const {email,password,name,passwordConfirm}=req.body;
  
    if((password as string).trim() !== (passwordConfirm as string).trim()){
        throw new AppError('password does not match password confirm',400)
    }
    
    const findUser=await User.findOne({email});
    if(findUser){
        throw new AppError('user already exist',400)
    }
    
    const hash=await Password.hash(password)
    const user=await User.create<UserAttrs>({
        email:email,
        name:name,
        password:hash,
        created_at:dateNow()
    })
    res.status(201).send(user)
})

