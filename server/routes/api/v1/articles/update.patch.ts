import ArticleModel, { IArticle } from '~/server/models/article.model';


export default defineEventHandler(async (event) => {
    try {
        const idRegex = /\b[0-9a-f]{24}\b/;

        // Read request body
        const body = await readBody(event);

        // Get article id from request
        const query = getQuery(event)
        const articleId = query.id;

        // Check the format of the article id to prevent
        // Cast error from mongoose
        if (!articleId || !idRegex.test(articleId.toString())) {
            // article id not provided
            return createError({
                statusCode: 400,
                statusMessage: "article id not provided or incorrect",
            });
        }

        // Trying to update the article
        // { body } must be wrapped in { } to be interpreted as an object
        const article: IArticle | null = await ArticleModel.findOneAndUpdate({ _id: articleId }, body, {
            new: true, runValidators: true
        });

        if (article) {
            // Success
            setResponseStatus(event, 200, 'article updated');
            return article;
        } else {
            // article not found
            return createError({
                statusCode: 404,
                statusMessage: "article not found",
            });
        }

    } catch (error) {
        console.error("An error occurred when updating a article:", error);

        return createError({
            statusCode: 500,
            statusMessage: "an error occured during article update",
        });
    }
});