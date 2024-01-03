
export const likeArticleApi = async (articleId: string, currentLikes: number) => {

    try {
        const body = {
            likes: currentLikes + 1
        };
        const { data, pending, error, refresh } = await useFetch(`/api/v1/articles/like?id=${articleId}`, {
            method: 'PATCH',
            body: body
        });

        if ((data.value as { success?: boolean })?.success) {
            return { success: true, message: 'like added' };
        }

    } catch (error: any) {
        console.log(error);
        return null;
    }
};


