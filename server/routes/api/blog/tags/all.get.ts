import { prisma } from '~/prisma/db'

// https://nuxt.com/docs/guide/directory-structure/server
export default defineEventHandler(async (event) => {

    try {
        const tags = await prisma.tag.findMany({
            select: {
                name: true,
            }
        })
        return tags;
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get tags');
    };
});
