import { prisma } from '~/prisma/db'
import { getServerSession } from '#auth'


export default defineEventHandler(async (event) => {

    const session = await getServerSession(event)
    if (!session) {
        return { status: 'unauthorized' }
    }

    try {
        const { context: { params } } = event;
        const id = params?.id ?? '';

        const deletePost = await prisma.article.delete({
            where: {
                id: parseInt(id)
            }
        })
        return deletePost;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not delete article');
    }

});