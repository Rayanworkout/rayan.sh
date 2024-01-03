
export type Article = {
    id: number;
    created_at: string;
    title: string;
    description: string;
    likes: number;

    category: {
        name: string,
    }

    tags: {
        name: string;
    };
};
