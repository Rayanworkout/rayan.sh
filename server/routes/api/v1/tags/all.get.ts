import { supabase } from '~/server/db/client';

export default defineEventHandler(async (event) => {
    try {

        let { data: tags, error } = await supabase
            .from('tags')
            .select('id, name')
            
        if (tags) {
            const cleantagsList = tags;

            return { success: true, data: cleantagsList };
        } else {
            setResponseStatus(event, 400, 'could not fetch tags');
        }


    } catch (error: any) {

        setResponseStatus(event, 500, 'could not fetch tags');

    }

});


