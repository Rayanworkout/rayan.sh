import { supabase } from '~/server/db/client';


export default defineEventHandler(async (event) => {
    try {
        // Every user can like an article
        // But only 10 / day

        // Get article id from request
        const query = getQuery(event)
        const articleID = query.id;

        const body = await readBody(event)
        const newLikes = body.likes;

        // Increment likes counter
        const { data, error } = await supabase
            .from('articles')
            .update({"likes": newLikes})
            .eq('id', articleID)
            .select()

        if (error || data.length === 0 || !data) {

            setResponseStatus(event, 400, 'could not like article');

        } else {
            return { success: true, message: 'like added' };
        }
    } catch (error: any) {
        setResponseStatus(event, 500, 'could not like article');

    }

});


