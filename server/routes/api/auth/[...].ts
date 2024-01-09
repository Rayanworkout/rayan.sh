import { NuxtAuthHandler } from '#auth';

// Lib to hash password
import bcrypt from 'bcrypt';

// Main Next-Auth
import CredentialsProvider from 'next-auth/providers/credentials';

// Github Provider
import GithubProvider from 'next-auth/providers/github'

// ORM
import { prisma } from '~/prisma/db';

// https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler
export default NuxtAuthHandler({
    secret: process.env.JWT_SECRET,

    pages: {
        signIn: '/login',
    },

    providers: [

        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),

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
                        // throw  createError({
                        //     status: 404,
                        //     message: 'user not found or password incorrect'
                        // });
                        return null;
                    } else {
                        // Checking if password is correct
                        if (await bcrypt.compare(credentials.password, user.password)) {

                            // Passwords match
                            return {
                                ...user,
                                password: undefined
                            }
                        } else {
                            // Passwords don't match
                            // throw createError({
                            //     status: 404,
                            //     message: 'user not found or password incorrect'
                            // });
                            return null;
                        }
                    }

                } catch (error) {

                    console.error(error);
                    // throw createError({
                    //     status: 500,
                    //     message: 'an error occured while logging in'
                    // });
                    return null;
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
        },

        async signIn({ user, account, email, credentials }) {
            let isAllowedToSignIn = true

            const allowedUser = [
                "90798147",
            ];
            // @ts-expect-error
            if (allowedUser.includes(String(user.id)) || credentials.email === process.env.ADMIN_EMAIL) {
                isAllowedToSignIn = true
            }
            else {
                isAllowedToSignIn = false
            }
            return isAllowedToSignIn
        }
    },

});