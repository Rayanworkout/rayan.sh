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
    published: boolean;
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
                published,
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
            setResponseStatus(event, 400, 'could not fetch articles');

        }


    } catch (error: any) {

        setResponseStatus(event, 500, 'could not fetch article');
    }

});


