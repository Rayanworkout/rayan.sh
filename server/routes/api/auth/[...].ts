import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '~/prisma/db'
import bcrypt from "bcrypt";
import { useRouter } from 'vue-router';

// https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler
export default NuxtAuthHandler({
    secret: process.env.JWT_SECRET,

    pages: {
        signIn: '/login',
    },

    providers: [
        // @ts-expect-error
        CredentialsProvider.default({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials: {
                email: string
                password: string
            }) {

                try {
                    // Checking if user exists
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email
                        }
                    });

                    if (!user) {
                        throw createError({
                            status: 404,
                            message: 'user not found or password incorrect'
                        });
                    }

                    // Checking if password is correct
                    if (await bcrypt.compare(credentials.password, user.password)) {
                        // Passwords match
                        return {
                            ...user,
                            password: undefined
                        }

                    }
                } catch (error) {
                    console.error(error);
                    throw createError({
                        status: 500,
                        message: 'an error occured while logging in'
                    });
                }

            }
        })
    ],
    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token = { ...token, ...user }
            }

            return token
        },

        async session({ session, token }) {
            session.user = {
                ...session.user,
                ...token
            }

            return session
        }


    }
})