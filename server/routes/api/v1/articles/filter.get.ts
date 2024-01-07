import { prisma } from '~/prisma/db'
import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
    const { searchString } = getQuery(event);

    // Check if user is authenticated
    const user = await serverSupabaseUser(event);

    if (!user) {
        return {
            status: 401,
            message: "unauthorized",
        };
    };

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
