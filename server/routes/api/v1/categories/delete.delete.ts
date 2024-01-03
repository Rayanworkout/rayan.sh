import { supabase } from '~/server/db/client';
import { serverSupabaseUser } from '#supabase/server'


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
            return { success: false, message: "no category name provided" };
        }

        const { error } = await supabase
            .from('categories')
            .delete()
            .eq('name', categoryName)
        

        if (error) {
            return { success: false, message: error };
        } else {
            return { success: true, message: 'category deleted' };
        }


    } catch (error: any) {
        return { success: false, message: "could not delete category" };
    }



});