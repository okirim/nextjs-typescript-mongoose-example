import {Schema, Model, Document} from "mongoose";
import validator from 'validator';
export interface UserAttrs {
    name: string,
    email: string,
    password: string,
    updated_at?: string,
    created_at: string,
}

export interface UserModel extends Model<UserDocument> {

}

export interface UserDocument extends Document {
    name: string,
    email: string,
    password: string,
    updated_at?: string,
    created_at: string,
}

export const usersSchema = new Schema<UserAttrs>({
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true],
            trim: true,
            validate: {
                validator: (val: string) => validator.isEmail(val),
                message: 'invalid email address !'
            }
        },
        password: {
            type: String,
            required: [true, 'password is required !'],
            minlength: 8,
            select: false,
            trim: true,
        },
        created_at: {
            type: String,
            required: true,
        },
    }, {
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
)