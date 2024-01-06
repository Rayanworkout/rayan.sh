import { prisma } from '~/prisma/db';
import { formatDate } from '~/utils/formatDate';
import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
    
    // Check if user is authenticated
    const user = await serverSupabaseUser(event);

    if (!user) {
        return {
            status: 401,
            message: "unauthorized",
        };
    };
    
    try {
        const feed = await prisma.article.findMany({
            include: {
                category: true,
                tags: true,
            },
            orderBy: { createdAt: 'desc' },
        });

        // Filter date of each article
        feed.forEach((article: any) => {
            article.createdAt = formatDate(String(article.createdAt));
        });
        
        return feed;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get feed');
    }
});
