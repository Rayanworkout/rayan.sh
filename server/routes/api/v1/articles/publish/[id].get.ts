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
        const { context: { params } } = event;
        const id = params?.id;

        const publishPost = await prisma.article.update({
            where: {
                id: parseInt(id ?? "")
            },
            data: {
                published: true,
            }
        });

        return publishPost;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not publish article');
    }

});