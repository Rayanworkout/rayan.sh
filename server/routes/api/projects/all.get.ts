import { prisma } from '~/prisma/db';


export default defineEventHandler(async (event) => {

    try {
        const projects = await prisma.project.findMany({
            include: {
                techs: true,
            },
            orderBy: { id: 'asc' },
        });


        return projects;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get projects');
    }
});
