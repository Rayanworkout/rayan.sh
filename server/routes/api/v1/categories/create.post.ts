import CategoryModel, { ICategory } from '~/server/models/category.model';
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

            // Get name from request
            const name = body.name as string | undefined;

            if (name) {
                // Check if category already exists
                const existingCategory: ICategory | null = await CategoryModel.findOne({ name });

                if (existingCategory) {
                    // Category already exists
                    return createError({
                        statusCode: 400,
                        statusMessage: "category already exists",
                    });
                }

                // Create new category
                const newCategory = new CategoryModel({ name });
                await newCategory.save();

                // Success
                setResponseStatus(event, 201, 'category created');
                return newCategory;
            }

        } catch (error) {
            console.error("An error occurred when creating a new category:", error);

            return createError({
                statusCode: 500,
                statusMessage: "an error occured during category creation",
            });
        }
    }

});