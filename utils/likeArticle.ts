import axios from 'axios';


// Using Axios because useFetch seems to have a bug with PATCH requests
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



