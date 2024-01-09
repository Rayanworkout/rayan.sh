import { prisma } from '~/prisma/db'
 

export default defineEventHandler(async (event) => {
    const { searchString } = getQuery(event);


    const draftPosts = await prisma.article.findMany({
        where: {
            OR: [
            {
                title: {
                    contains: searchString?.toString(),
                },
            },
              {
                content: {
                    contains: searchString?.toString(),
                },
              },
              {
                description: {
                    contains: searchString?.toString(),
                },
              },
            ],
        },
    })
    .catch((error) => {
        console.error(error);
    });

    return draftPosts;
});
