
export type Article = {
    forEach(arg0: (article: Article) => void): unknown;
    id: number;
    created_at: string;
    title: string;
    description: string;
    published: boolean;
    likes: number;

    category: {
        name: string,
    }

    tags: {
        name: string;
    };
};
