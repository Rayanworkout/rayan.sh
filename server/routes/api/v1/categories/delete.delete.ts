import CategoryModel from '~/server/models/category.model';
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
            const idRegex = /\b[0-9a-f]{24}\b/;

            const query = getQuery(event)
            const categoryID = query.id;

            // Check the format of the category id to prevent
            // Cast error from mongoose
            if (!categoryID || !idRegex.test(categoryID.toString())) {
                // category id not provided
                return createError({
                    statusCode: 400,
                    statusMessage: "category id not provided or incorrect format",
                });
            }

            // Trying to delete the category
            const deletedCategory = await CategoryModel.findByIdAndDelete(categoryID);

            if (deletedCategory) {
                // Success
                setResponseStatus(event, 200, 'category deleted');
                return deletedCategory;
            } else {
                // category not found
                return createError({
                    statusCode: 404,
                    statusMessage: "category not found",
                });
            }

        } catch (error) {
            console.error("An error occurred when deleting a category:", error);

            return createError({
                statusCode: 500,
                statusMessage: "an error occured during category deletion",
            });
        }
    }

});