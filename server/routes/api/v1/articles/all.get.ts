import { prisma } from '~/prisma/db';
import { formatDate } from '~/utils/frontend/formatDate';
import { getServerSession } from '#auth'



export default defineEventHandler(async (event) => {

    const session = await getServerSession(event)
    if (!session) {
        return { status: 'refused' }
    }

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
