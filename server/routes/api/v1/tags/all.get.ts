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
            return { success: false, data: null };
        }


    } catch (error: any) {

        return { success: false, data: null };

    }

});


