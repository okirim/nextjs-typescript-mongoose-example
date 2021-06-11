import { Schema, Model, Document, ObjectId } from 'mongoose';

export interface CommentAttrs {
    body: string
}

export interface CommentDocument extends Document {
    body: string
}

export interface CommentModel extends Model<CommentDocument> {
        
}

export const commentSchema = new Schema<CommentAttrs>({
    body: {
        type: String,
        required: true
    }
});
