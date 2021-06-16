import {Schema,Model,Document} from "mongoose";

export interface UserAttrs{
    name:string,
    email:string,
    password:string,
    updated_at?:string,
    created_at:string,
}
export interface UserModel extends Model<UserDocument> {

}
export interface UserDocument extends Document{
    name:string,
    email:string,
    password:string,
    updated_at?:string,
    created_at:string,
}
export const usersSchema=new Schema<UserAttrs>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    created_at:{
        type:String,
        required:true
    }
})