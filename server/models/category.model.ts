import mongoose, { Schema, Document } from 'mongoose';



export interface ICategory extends Document {
    name: string,
}


export const CategorySchema: Schema = new Schema({
    name: { type: String, required: true, unique: true, trim: true, maxlength: 30 }
});



export default mongoose.model<ICategory>('Categories', CategorySchema);
