import { prisma } from '~/prisma/db'
 

export default defineEventHandler(async (event) => {


    try {
        const { name } = await readBody(event);

        const createTag = await prisma.tag.create({
            data: {
                name: name
            }
        });

        return createTag;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not create tag');
    }

});