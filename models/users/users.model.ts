import mongoose,{ model } from 'mongoose';

import {UserDocument, UserModel, usersSchema} from "./users.schema";
usersSchema.pre('save',function (){
    this.password='';
})


export const User=mongoose.models.users as UserModel|| model<UserDocument,UserModel>('users',usersSchema);