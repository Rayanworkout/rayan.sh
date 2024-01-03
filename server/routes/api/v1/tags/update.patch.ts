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
        const newName = body.name;

        const query = getQuery(event)
        const oldTagName = query.name;


        const { data, error } = await supabase
            .from('tags')
            .update({ name: newName })
            .eq('name', oldTagName)
            .select()
        if (error) {

            console.log(error.message);
            return { success: false, message: 'could not update tag' };

        } else {
            return { success: true, message: 'tag updated' };
        }

    } catch (error: any) {

        return { success: false, message: error.message };

    }

});


