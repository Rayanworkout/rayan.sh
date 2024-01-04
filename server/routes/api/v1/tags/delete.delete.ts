import { serverSupabaseUser } from '#supabase/server';
import { supabase } from '~/server/db/client';


export default defineEventHandler(async (event) => {

    // Check if user is authenticated
    const user = await serverSupabaseUser(event);

    if (!user) {
        return {
            status: 401,
            message: "unauthorized",
        };
    };

    try {

        const query = getQuery(event)
        const tagName = query.name;

        if (!tagName) {
            setResponseStatus(event, 403, 'no tag name provided');

        }

        const { error } = await supabase
            .from('tags')
            .delete()
            .eq('name', tagName)

        if (error) {
            setResponseStatus(event, 400, 'could not delete tag');
        } else {
            return { success: true, message: 'tag deleted' };
        }


    } catch (error: any) {
        setResponseStatus(event, 500, 'could not delete tag');
    }

});