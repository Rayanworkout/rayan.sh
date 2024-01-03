import { supabase } from '~/server/db/client';
import { formatDate } from '~/utils/formatDate';

// Types
import { type Article } from '~/types/article.type';



export default defineEventHandler(async (event) => {
    const articleId = getRouterParam(event, 'id')
    try {

        let { data: article, error } = await supabase
            .from('articles')
            .select(`
            id,
            created_at,
            title,
            description,
            content,
            likes,
            category (
                name
                ),
            tags (
                name
            )`)
            .eq('id', articleId)

        if (article) {
            let cleanArticle = article[0] as unknown as Article;
            cleanArticle.created_at = formatDate(cleanArticle.created_at);

            return { success: true, data: cleanArticle };
        } else {
            return { success: false, data: null };
        }

    } catch (error: any) {

        console.log(error.message)
        return { success: false, data: null };
    }

}); 