import axios from 'axios';


// Using Axios because useFetch seems to have a bug with PATCH requests
// Do not use it everywhere since it would cause issues with SSR
// https://nuxt.com/docs/getting-started/data-fetching#why-using-specific-composables

export const likeArticleApi = async (articleId: string, currentLikes: number) => {
    try {
        const body = {
            likes: currentLikes + 1
        };
        const response = await axios.patch(`/api/v1/articles/update?id=${articleId}`, body);

        return response.data;

    } catch (error: any) {
        console.log(error);
        return null;
    }
};



