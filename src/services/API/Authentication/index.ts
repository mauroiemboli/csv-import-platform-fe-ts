
import { AuthenticationServiceModel } from "./AuthenticationService";
import axios, { AxiosError } from 'axios';
const BaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const AuthenticationService = {
    async ValidateLogin(params: AuthenticationServiceModel.LoginPayload) {
        const baseUrl = BaseUrl + "/authorization/login";
        const { email, password } = params.payload;
        try {
            const response = await axios.post(baseUrl as string, {
                email: email,
                password: password
            });

            if (response.data) {
                localStorage.setItem('authUser', JSON.stringify(response.data.data.authUser));
                localStorage.setItem('authToken', response.data.data.authToken);
            }
            return response;
        } catch (e) {
            const errorObject = e as AxiosError;
            if (errorObject.response && errorObject.response.data) {
                const data: any = errorObject.response.data;
                throw data.message;
            }
            return null;
        }
    },

    async ValidateToken(token: string) {
        const baseUrl = BaseUrl + "/authorization/validate-token";
        try {
            const response = await axios.post(baseUrl as string, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (e) {
            const errorObject = e as AxiosError;
            if (errorObject.response && errorObject.response.data) {
                const data: any = errorObject.response.data;
                return data.message;
            }
            return null;
        }
    }

}
