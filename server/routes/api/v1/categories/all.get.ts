import { prisma } from '~/prisma/db'

export default defineEventHandler(async (event) => {

    try {
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true,
            }
        })
        return categories;
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get categories');
    };
});
