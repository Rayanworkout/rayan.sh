import { supabase } from '~/server/db/client';

export default defineEventHandler(async (event) => {
    try {

        let { data: categories, error } = await supabase
            .from('categories')
            .select('id, name')
            
        if (categories) {
            const cleanCategoriesList = categories;

            return { success: true, data: cleanCategoriesList };
        } else {
            setResponseStatus(event, 400, 'could not fetch categories');

        }


    } catch (error: any) {

        setResponseStatus(event, 500, 'could not fetch categories');

    }

});


