import mongoose,{model} from 'mongoose';
import database_connection from '../../app/database/connection';
import { CommentDocument, CommentModel, commentSchema } from "./comments.schema";

//handle middleware

//save middleware 
commentSchema.pre('save', async function (done) {
     
    done()
})


export const Comment = mongoose.models.comments as CommentModel || model<CommentDocument,CommentModel>('comments',commentSchema);

