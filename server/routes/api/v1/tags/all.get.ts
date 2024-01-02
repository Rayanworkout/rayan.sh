import TagModel, { ITag } from '~/server/models/tag.model';

export default defineEventHandler(async (event) => {
    try {
        // Query DB for existing tags
        const allTags: ITag[] = await TagModel.find()
        return {success: true, data: allTags};

    } catch (error: any) {
        return {success: false, error: error.message};
    }
});
