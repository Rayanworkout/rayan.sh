import ArticleModel from '~/server/models/article.model';


export default defineEventHandler(async (event) => {
    try {

        const idRegex = /\b[0-9a-f]{24}\b/;

        const query = getQuery(event)
        const articleID = query.id;

        // Check the format of the article id to prevent
        // Cast error from mongoose
        if (!articleID || !idRegex.test(articleID.toString())) {
            // article id not provided
            return createError({
                statusCode: 400,
                statusMessage: "article id not provided or incorrect format",
            });
        }

        // Trying to delete the article
        const deletedArticle = await ArticleModel.findByIdAndDelete(articleID);

        if (deletedArticle) {
            // Success
            setResponseStatus(event, 200, 'article deleted');
            return deletedArticle;
        } else {
            // article not found
            return createError({
                statusCode: 404,
                statusMessage: "article not found",
            });
        }

    } catch (error) {
        console.error("An error occurred when deleting a article:", error);

        return createError({
            statusCode: 500,
            statusMessage: "an error occured during article deletion",
        });
    }
});