import { prisma } from '~/prisma/db'
import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {

    // Check if user is authenticated
    const user = await serverSupabaseUser(event);

    if (!user) {
        return {
            status: 401,
            message: "unauthorized",
        };
    };

    try {

        // Read request body
        const body = await readBody(event);

        const { context: { params } } = event;
        const id = params?.id ?? '';

        const { title, description, content, categoryId, tags } = body;

        const updatePost = await prisma.article.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title,
                description,
                content,
                categoryId,
                tags: {
                    connect: tags.map((name: string) => ({ name }))
                }
            }
        });
        return updatePost;
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not update post');
    }
});