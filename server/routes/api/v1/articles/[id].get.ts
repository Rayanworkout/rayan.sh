import { prisma } from '~/prisma/db'

export default defineEventHandler(async (event) => {


    try {
        const { context: { params } } = event;
        const id = params?.id;

        if (id) {
            const getPost = await prisma.article.findUnique({
                where: {
                    id: Number(id)
                },
                include: {
                    category: true,
                    tags: true,
                }
            })
            return getPost;
        }
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get article');
    }



});