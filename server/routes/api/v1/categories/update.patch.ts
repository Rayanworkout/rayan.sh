import CategoryModel, { ICategory } from '~/server/models/category.model';


export default defineEventHandler(async (event) => {
    try {

        const idRegex = /\b[0-9a-f]{24}\b/;

        // Read request body
        const body = await readBody(event);
        
        // Get name from request
        const name = body.name as string | undefined;

        // Get category id from request
        const query = getQuery(event)
        const categoryId = query.id;

        // Check the format of the category id to prevent
        // Cast error from mongoose
        if (!categoryId || !name || !idRegex.test(categoryId.toString())) {
            // Category id not provided
            return createError({
                statusCode: 400,
                statusMessage: "category id / name not provided or incorrect",
            });
        }

        // Trying to update the category
        // { name } must be wrapped in { } to be interpreted as an object
        const category: ICategory | null = await CategoryModel.findOneAndUpdate({ _id: categoryId }, { name }, {
            new: true, runValidators: true
        });

        if (category) {
            // Success
            setResponseStatus(event, 200, 'category updated');
            return category;
        } else {
            // category not found
            return createError({
                statusCode: 404,
                statusMessage: "category not found",
            });
        }

    } catch (error) {
        console.error("An error occurred when updating a category:", error);

        return createError({
            statusCode: 500,
            statusMessage: "an error occured during category update",
        });
    }
});