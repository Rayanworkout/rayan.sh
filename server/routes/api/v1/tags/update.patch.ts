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

        if (!newName || newName === '') {
            setResponseStatus(event, 403, 'no tag name provided');

        }


        const { data, error } = await supabase
            .from('tags')
            .update({ name: newName })
            .eq('name', oldTagName)
            .select()
        if (error) {

            console.log(error.message);
            setResponseStatus(event, 400, 'could not update tag');

        } else {
            return { success: true, message: 'tag updated' };
        }

    } catch (error: any) {

        setResponseStatus(event, 500, 'could not update tag');

    }

});


