import { prisma } from '~/prisma/db'
import bcrypt from "bcrypt";


export default defineEventHandler(async (event) => {


    try {
        const { email, password } = await readBody(event);

        if (!email || !password) {
            setResponseStatus(event, 400, 'email and password required');
            return;
        }

        // Checking if user exists

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            setResponseStatus(event, 404, 'user not found or password incorrect');
            return;
        }

        // Checking if password is correct
        if (await bcrypt.compare(password, user.password)) {
            setResponseStatus(event, 200, 'user logged in');
            return;
        } else {
            setResponseStatus(event, 404, 'user not found or password incorrect');
            return;
        }

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 500, 'could not create user');
    }

});