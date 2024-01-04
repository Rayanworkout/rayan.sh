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

        const query = getQuery(event)
        const articleID = query.id;


        const { error } = await supabase
            .from('articles')
            .delete()
            .eq('id', articleID)

        if (error) {
            setResponseStatus(event, 400, 'could not delete article');

        } else {
            return { success: true, message: 'article deleted' };
        }

    } catch (error: any) {

        setResponseStatus(event, 500, 'could not delete article');

    }

});


