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
        }

        // Read request body
        const body = await readBody(event);

        // Get name from request
        const name = body.name as string | undefined;

        const { data, error } = await supabase
            .from('categories')
            .insert([
                { name: name }
            ])
            .select()

        if (data) {

            return { success: true, message: 'category created' };
        } else if (error) {
            setResponseStatus(event, 400, 'could not create category');

        }


    } catch (error: any) {

        setResponseStatus(event, 500, 'could not create category');

    }

});