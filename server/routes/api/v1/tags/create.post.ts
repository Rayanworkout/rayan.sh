import { prisma } from '~/prisma/db'
import { getServerSession } from '#auth' 

export default defineEventHandler(async (event) => {

    const session = await getServerSession(event)
    if (!session) {
        return { status: 'refused' }
    }

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