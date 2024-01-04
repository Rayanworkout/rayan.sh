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
        const categoryName = query.name;

        if (!categoryName) {
            setResponseStatus(event, 400, 'no category name provided');

        }

        const { error } = await supabase
            .from('categories')
            .delete()
            .eq('name', categoryName)
        

        if (error) {
            setResponseStatus(event, 400, 'could not delete category ');

        } else {
            return { success: true, message: 'category deleted' };
        }


    } catch (error: any) {
        setResponseStatus(event, 500, 'could not delete category ');

    }



});