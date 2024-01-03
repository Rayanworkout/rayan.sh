import TagModel, { ITag } from '~/server/models/tag.model';
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
            // Query DB for existing tags
            const allTags: ITag[] = await TagModel.find()
            return { success: true, data: allTags };

        } catch (error: any) {
            return { success: false, error: error.message };
        }
    }

});
