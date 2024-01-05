import { prisma } from '~/prisma/db'

export default defineEventHandler(async (event) => {
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
    })
    .catch((error) => {
        console.error(error);
        setResponseStatus(event, 400, 'could not like article');

    });

    return likePost;
});