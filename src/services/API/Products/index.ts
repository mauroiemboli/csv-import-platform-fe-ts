
import { getAuthToken } from "@Services/utils";
import { ProductServiceModel } from "./ProductService";
import axios, { AxiosError } from 'axios';
const BaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const ProductService = {
    GetProducts: async (): Promise<ProductServiceModel.GetProductsResponse | null> => {
        try {
            const token = getAuthToken();

            const response = await axios.get(BaseUrl + '/products', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            return response.data;
        } catch (error) {
            return null;
        }
    },

    UploadData: async (event: any): Promise<ProductServiceModel.GetUploadResponse | null> => {
        const formData = new FormData();
        const token = getAuthToken();
        if (event && event.target && event.target.files?.length) {
            formData.append('file', event.target.files[0]);

            try {
                const response = await axios.post(BaseUrl + '/products/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                });

                return response.data;
            } catch (e) {
                const errorObject = e as AxiosError;
                if (errorObject.response && errorObject.response.data) {
                    const data: any = errorObject.response.data;
                    return data.message;
                } return null;

            }
        }
        return null;
    }
}
