import { prisma } from '~/prisma/db'
 


export default defineEventHandler(async (event) => {

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