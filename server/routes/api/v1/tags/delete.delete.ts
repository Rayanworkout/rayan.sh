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
            return { success: false, message: "no tag name provided" };
        }

        const { error } = await supabase
            .from('tags')
            .delete()
            .eq('name', tagName)

        if (error) {
            return { success: false, message: error };
        } else {
            return { success: true, message: 'tag deleted' };
        }


    } catch (error: any) {
        return { success: false, message: "could not delete tag" };
    }

});