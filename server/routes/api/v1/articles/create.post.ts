import { serverSupabaseUser } from '#supabase/server';
import { supabase } from '~/server/db/client';


export default defineEventHandler(async (event) => {
    try {

        // Check if user is authenticated
        const user = await serverSupabaseUser(event);

        if (!user) {
            return {
                status: 401,
                message: "unauthorized",
            };
        };

        // Read request body
        const body = await readBody(event);

        const { title,
            description,
            content,
            published,
            likes,
            category, // An array of category ids
            tags, // An array of tag ids
        } = body;


        const { error } = await supabase
            .from('articles')
            .insert({
                title,
                description,
                content,
                published,
                likes,
                category,
                tags,
            })

        if (error) {
            return { success: false, message: `could not create article: ${error.message} ` };
        } else {
            return { success: true, message: 'article created' };
        }

    } catch (error: any) {

        return { success: false, message: error.message };

    }

});


