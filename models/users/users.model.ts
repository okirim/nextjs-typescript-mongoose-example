import mongoose,{ model ,HookNextFunction } from 'mongoose';

import {UserDocument, UserModel, usersSchema} from "./users.schema";


export const User=mongoose.models.users as UserModel|| model<UserDocument,UserModel>('users',usersSchema);