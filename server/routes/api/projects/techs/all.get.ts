import { prisma } from '~/prisma/db';


export default defineEventHandler(async (event) => {

    try {
        const techs = await prisma.tech.findMany({});


        return techs;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not get techs');
    }
});
