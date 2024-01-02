import mongoose, { Schema, Document } from 'mongoose';

export interface IArticle extends Document {
    getTagsArray(): any;
    title: string,
    description: string;
    content: boolean;
    published: boolean;
    likes: number;
    category: string;
    tags: string[];
    creation_date: string;
}


const ArticleSchema: Schema = new Schema({
    title: { type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 100 },
    description: { type: String, required: true, trim: true, minlength: 3, maxlength: 200 },
    content: { type: String, required: true, trim: true, minlength: 3, maxlength: 10000 },
    published: { type: Boolean, required: true, default: false },
    likes: { type: Number, required: true, default: 0 },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tags'
    }],
    creation_date: { type: Date, required: true, default: Date.now },
});


ArticleSchema.methods.getTagsArray = function() {
    return this.tags.map((tag: any) => tag.name);
};


export default mongoose.model<IArticle>('Article', ArticleSchema);
