import { prisma } from '~/prisma/db'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {

    const session = await getServerSession(event)
    if (!session) {
        return { status: 'refused' }
    }

    try {
        // Read request body
        const body = await readBody(event);

        const { context: { params } } = event;
        const id = params?.id ?? '';

        const updateCategory = await prisma.category.update({
            where: {
                id: parseInt(id)
            },
            data: body
        })
            .catch((error) => {
                console.error(error);
            });

        return updateCategory;
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not update category');
    }
});