import { prisma } from '~/prisma/db'
import bcrypt from "bcrypt";


export default defineEventHandler(async (event) => {

    return { status: 'unauthorized' }

    // DELETE THIS ROUTE IN PRODUCTION

    try {
        const { email, password } = await readBody(event);

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword

            }
        });

        setResponseStatus(event, 201, `user ${email} created`);

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 500, 'could not create user');
    }

});