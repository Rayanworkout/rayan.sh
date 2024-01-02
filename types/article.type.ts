
export type ArticleInGridType = {
    _id: number;
    title: string;
    description: string;
    likes: number;

    category: {
        _id: number;
        name: string,
        __v: number
    }

    tags: {
        _id: number;
        name: string;
        __v: number;
    }[];
    creation_date: string;
}

export type ArticleType = {
    id: number;
    title: string;
    description: string;
    is_published: boolean;
    likes: number;
    category: {
        _id: number;
        name: string,
        __v: number
    }
    tags: {
        _id: number;
        name: string;
        __v: number;
    }[];
    creation_date: string;
    content: string;
}
