import { prisma } from '~/prisma/db'

export default defineEventHandler(async (event) => {

    try {
        const { context: { params } } = event;
        const id = params?.id;

        const likePost = await prisma.article.update({
            where: {
                id: parseInt(id ?? "")
            },
            data: {
                likes: {
                    increment: 1
                }
            }
        });

        return likePost;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not like article');
    }

});