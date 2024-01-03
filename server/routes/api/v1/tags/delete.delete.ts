import TagModel from '~/server/models/tag.model';
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
            const tagId = query.id;

            // Check the format of the tag id to prevent
            // Cast error from mongoose
            if (!tagId || !idRegex.test(tagId.toString())) {
                // Tag id not provided
                return createError({
                    statusCode: 400,
                    statusMessage: "tag id not provided or incorrect format",
                });
            }

            // Trying to delete the tag
            const deletedTag = await TagModel.findByIdAndDelete(tagId);

            if (deletedTag) {
                // Success
                setResponseStatus(event, 200, 'tag deleted');
                return deletedTag;
            } else {
                // Tag not found
                return createError({
                    statusCode: 404,
                    statusMessage: "tag not found",
                });
            }

        } catch (error) {
            console.error("An error occurred when deleting a tag:", error);

            return createError({
                statusCode: 500,
                statusMessage: "an error occured during tag deletion",
            });
        }
    }

});