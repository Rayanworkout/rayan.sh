import ArticleModel, { IArticle } from '~/server/models/article.model';
import { formatDate } from '~/utils/formatDate';

// Define the type for the response data structure
interface IResponse {
    success: boolean;
    data?: IArticle[] | string;
}

export default defineEventHandler(async (event) => {
    try {
        // Query DB for existing articles
        // lean() returns a plain JS object instead of a Mongoose document
        // So I can modify the object without worrying about persisting it
        // populate() replaces the ObjectId with the actual object
        // So I can get the name
        const allArticles: IArticle[] = await ArticleModel.find().sort({creation_date: -1}).populate('tags').populate('category').lean();
        // Convert datetime to string
        allArticles.forEach((article: IArticle) => article.creation_date = formatDate(article.creation_date));

        return { success: true, data: allArticles } as IResponse;
    } catch (error: any) {
        return { success: false, data: error.message } as IResponse;
    }
});

