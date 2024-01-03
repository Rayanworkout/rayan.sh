import ArticleModel, { IArticle } from '~/server/models/article.model';
import { serverSupabaseUser } from '#supabase/server'


export default defineEventHandler(async (event) => {

    // Check if user is authenticated
    const user = await serverSupabaseUser(event);

    if (!user) {
        return {
            status: 401,
            message: "unauthorized",
        };
    } else {
        try {

            // Read request body
            const body = await readBody(event);

            const { title,
                description,
                content,
                published,
                likes,
                category, // An array of category ids
                tags, // An array of tag ids
            } = body;

            if (title) {
                // Check if article already exists
                const existingArticle: IArticle | null = await ArticleModel.findOne({ title });

                if (existingArticle) {
                    // article already exists
                    return createError({
                        statusCode: 400,
                        statusMessage: "article title already exists",
                    });
                }

                // Create new article
                const newArticle: IArticle = new ArticleModel({
                    title,
                    description,
                    content,
                    published,
                    likes,
                    category,
                    tags,
                    creation_date: Date.now()
                });
                await newArticle.save();

                // Success
                setResponseStatus(event, 201, 'article created');
                return newArticle;
            }

        } catch (error) {
            console.error("An error occurred when creating a new article:", error);

            return createError({
                statusCode: 500,
                statusMessage: "an error occured during article creation",
            });
        }
    }

});