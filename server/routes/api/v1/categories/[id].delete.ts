import { prisma } from '~/prisma/db'
 

export default defineEventHandler(async (event) => {


    try {
        const { context: { params } } = event;
        const id = params?.id ?? '';

        const deleteCategory = await prisma.category.delete({
            where: {
                id: parseInt(id)
            }
        });
        return deleteCategory;
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get categories');
    }

});