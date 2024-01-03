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
        }

        // Read request body
        const body = await readBody(event);

        // Get name from request
        const name = body.name as string | undefined;

        const { data, error } = await supabase
            .from('tags')
            .insert([
                { name: name }
            ])
            .select()

        if (data) {

            return { success: true, message: 'tag created' };
        } else if (error) {
            return { success: false, message: error };
        }


    } catch (error: any) {

        return { success: false, data: null };

    }

});