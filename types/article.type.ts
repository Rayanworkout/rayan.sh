
export type Article = {
    forEach(arg0: (article: Article) => void): unknown;
    id: number;
    createdAt: string;
    title: string;
    description: string;
    content: string;
    published: boolean;
    likes: number;

    category: {
        name: string,
    }

    tags: {
        name: string;
    }[];
};
