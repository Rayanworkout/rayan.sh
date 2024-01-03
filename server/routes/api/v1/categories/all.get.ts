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
            return { success: false, data: null };
        }


    } catch (error: any) {

        return { success: false, data: null };

    }

});


