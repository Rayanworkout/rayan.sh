import { prisma } from '~/prisma/db'
 

export default defineEventHandler(async (event) => {


    try {
        const { name } = await readBody(event);

        const createCategory = await prisma.category.create({
            data: {
                name: name
            }
        });
        return createCategory;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not create category');
    }
});