import ArticleModel, { IArticle } from '~/server/models/article.model';
import { formatDate } from '~/utils/formatDate';


// Define the type for the response data structure
interface IResponse {
  success: boolean;
  data?: IArticle[] | string;
}



export default defineEventHandler(async (event) => {
  const articleId = getRouterParam(event, 'id')



  try {
    // Query DB for a specific article
    // lean() returns a plain JS object instead of a Mongoose document
    // So I can modify the object without worrying about persisting it
    // populate() replaces the ObjectId with the actual object
    // So I can get the name
    const article: IArticle[] = await ArticleModel.find({ _id: articleId }).populate('tags').populate('category').lean();
    // Convert datetime to string
    article[0].creation_date = formatDate(article[0].creation_date);


    return { success: true, data: article } as IResponse;
  } catch (error: any) {
    return { success: false, data: error.message } as IResponse;
  }





});    