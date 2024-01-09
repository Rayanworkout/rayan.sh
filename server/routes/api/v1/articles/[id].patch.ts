import { prisma } from '~/prisma/db'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {

    const session = await getServerSession(event)
    if (!session) {
        return { status: 'unauthorized' }
    }

    try {

        // Read request body
        const body = await readBody(event);

        const { context: { params } } = event;
        const id = params?.id ?? '';

        const { title, description, content, categoryId, tags } = body;

        const updatePost = await prisma.article.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title,
                description,
                content,
                categoryId,
                tags: {
                    connect: tags.map((name: string) => ({ name }))
                }
            }
        });
        return updatePost;
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not update post');
    }
});