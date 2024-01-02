import mongoose, { Schema, Document } from 'mongoose';



export interface ITag extends Document {
    name: string,
}


export const TagSchema: Schema = new Schema({
    name: {
        type: String, required: true, unique: true, trim: true, maxlength: 30, cast: '{VALUE} should be a string'
    },
});



export default mongoose.model<ITag>('Tags', TagSchema);
