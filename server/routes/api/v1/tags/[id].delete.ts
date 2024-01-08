import { prisma } from '~/prisma/db'
 

export default defineEventHandler(async (event) => {



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