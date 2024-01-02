import CategoryModel, { ICategory } from '~/server/models/category.model';



// Define the type for the response data structure
interface IResponse {
    success: boolean;
    data: string[];
}



export default defineEventHandler(async (event) => {
    try {
        // Query DB for existing tags
        const allCategories: ICategory[] | undefined = await CategoryModel.find()
        return { success: true, data: allCategories } as unknown as IResponse;

    } catch (error: any) {
        return {success: false, error: error.message} as unknown as IResponse;
    }
});
