import { prisma } from '~/prisma/db'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {

    const session = await getServerSession(event)
    if (!session) {
        return { status: 'unauthorized' }
    }

    try {
        const { context: { params } } = event;
        const id = params?.id;

        const publishPost = await prisma.article.update({
            where: {
                id: parseInt(id ?? "")
            },
            data: {
                published: false,
            }
        });

        return publishPost;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not unpublish article');
    }

});