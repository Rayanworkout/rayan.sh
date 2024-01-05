import { prisma } from '~/prisma/db'
import {formatDate} from '~/utils/formatDate'

export default defineEventHandler(async (event) => {
    try {
        const feed = await prisma.article.findMany({
            where: { 
                published: true
            },
            include: {
                category: true,
                tags: true,
            }
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
