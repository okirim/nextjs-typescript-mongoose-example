
import { ObjectId } from "mongoose";
export interface PostItemType{
    // id: string,
    title: string,
    excerpt:string,
    slug: string,
    image: string,
    date: string,
    // isFeatured: boolean,

}
export interface IUser{
    email:string,
    password:string,
  
}

export interface IAuthUser{
   email:string,
   name:string,
   created_at:string 
   id:ObjectId
}