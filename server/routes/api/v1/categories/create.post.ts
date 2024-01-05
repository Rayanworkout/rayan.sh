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
        const { name } = await readBody(event);

        const createCategory = await prisma.category.create({
            data: {
                name: name
            }
        });
        return createCategory;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not create category');
    }
});