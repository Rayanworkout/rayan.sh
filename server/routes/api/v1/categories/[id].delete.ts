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
        const id = params?.id ?? '';

        const deleteCategory = await prisma.category.delete({
            where: {
                id: parseInt(id)
            }
        });
        return deleteCategory;
    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get categories');
    }

});