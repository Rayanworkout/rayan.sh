import { prisma } from '~/prisma/db'
 

export default defineEventHandler(async (event) => {


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