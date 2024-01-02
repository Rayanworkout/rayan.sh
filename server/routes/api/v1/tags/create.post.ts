import TagModel, { ITag } from '~/server/models/tag.model';

export default defineEventHandler(async (event) => {
    try {
    
        // Read request body
        const body = await readBody(event);

        // Get name from request
        const name = body.name as string | undefined;
        
        if (name) {
            // Check if tag already exists
            const existingTag: ITag | null = await TagModel.findOne({ name });

            if (existingTag) {
                // Tag already exists
                return createError({
                    statusCode: 400,
                    statusMessage: "tag already exists",
                });
            }

            // Create new tag
            const newTag = new TagModel({ name });
            await newTag.save();

            // Success
            setResponseStatus(event, 201, 'tag created');
            return newTag;
        }

    } catch (error) {
        console.error("An error occurred when creating a new tag:", error);

        return createError({
            statusCode: 500,
            statusMessage: "an error occured during tag creation",
        });
    }
});