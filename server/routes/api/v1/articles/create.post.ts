import { prisma } from '~/prisma/db'
 


export default defineEventHandler(async (event) => {



    try {
        const {
            title,
            content,
            description,
            category,
            tags,
        } = await readBody(event);

        const createPost = await prisma.article.create({
            data: {
                title,
                description,
                content,
                published: false,
                likes: 0,
                category: {
                    connect: {
                        name: category
                    }
                },
                tags: {
                    connect: tags.map((tag: string) => {
                        return {
                            name: tag
                        }
                    })
                },
            }

        }


        );
        return createPost;

    } catch (error) {
        console.error(error);
        setResponseStatus(event, 400, 'could not create article');
    }


});