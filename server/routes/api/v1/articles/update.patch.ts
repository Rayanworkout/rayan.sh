import { supabase } from '~/server/db/client';
import { serverSupabaseUser } from '#supabase/server'


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

        // Get article id from request
        const query = getQuery(event)
        const articleID = query.id;


        const { data, error } = await supabase
            .from('articles')
            .update(body)
            .eq('id', articleID)
            .select()

        if (error) {

            console.log(error.message);
            return { success: false, message: 'could not update article' };

        } else {
            return { success: true, message: 'article updated' };
        }

    } catch (error: any) {

        return { success: false, message: error.message };

    }

});


