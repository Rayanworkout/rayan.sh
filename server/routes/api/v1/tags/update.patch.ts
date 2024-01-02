import TagModel, { ITag } from '~/server/models/tag.model';


export default defineEventHandler(async (event) => {
    try {

        const idRegex = /\b[0-9a-f]{24}\b/;

        // Read request body
        const body = await readBody(event);
        
        // Get name from request
        const name = body.name as string | undefined;

        // Get tag id from request
        const query = getQuery(event)
        const tagId = query.id;

        // Check the format of the tag id to prevent
        // Cast error from mongoose
        if (!tagId || !name || !idRegex.test(tagId.toString())) {
            // Tag id not provided
            return createError({
                statusCode: 400,
                statusMessage: "tag id / name not provided or incorrect",
            });
        }

        // Trying to update the tag
        // { name } must be wrapped in { } to be interpreted as an object
        const tag: ITag | null = await TagModel.findOneAndUpdate({ _id: tagId }, { name }, {
            new: true, runValidators: true
        });

        if (tag) {
            // Success
            setResponseStatus(event, 200, 'tag updated');
            return tag;
        } else {
            // Tag not found
            return createError({
                statusCode: 404,
                statusMessage: "tag not found",
            });
        }

    } catch (error) {
        console.error("An error occurred when updating a tag:", error);

        return createError({
            statusCode: 500,
            statusMessage: "an error occured during tag update",
        });
    }
});