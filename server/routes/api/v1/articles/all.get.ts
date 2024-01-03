import { supabase } from '~/server/db/client';

// Utils
import { formatDate } from '~/utils/formatDate';

// Types
import { type Article } from '~/types/article.type';

interface IAllArticles {
    forEach(arg0: (article: Article) => void): unknown;
    id: number;
    created_at: string;
    title: string;
    description: string;
    likes: number;
    category: {
        name: string;
    };
    tags: {
        name: string;
    };
}[];

export default defineEventHandler(async (event) => {
    try {

        let { data: articles, error } = await supabase
            .from('articles')
            .select(
                `id,
                created_at,
                title,
                description,
                likes,
                category (
                    name
                    ),
                tags (
                    name
                    )
                `)
            
        if (articles) {
            let cleanArticleList = articles as unknown as IAllArticles;
            
            // Format the date of each article
            cleanArticleList.forEach((article: Article) => {
                article.created_at = formatDate(article.created_at);
            });

            return { success: true, data: cleanArticleList };
        } else {
            return { success: false, data: null };
        }


    } catch (error: any) {

        return { success: false, data: null };

    }

});


