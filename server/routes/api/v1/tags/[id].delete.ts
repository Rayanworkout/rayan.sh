import { prisma } from '~/prisma/db'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {

    const session = await getServerSession(event)
    if (!session) {
        return { status: 'refused' }
    }

    try {
        const { context: { params } } = event;
        const id = params?.id ?? '';

        const deleteTag = await prisma.tag.delete({
            where: {
                id: parseInt(id)
            }
        });
        return deleteTag;
        
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get tags');
    }
});