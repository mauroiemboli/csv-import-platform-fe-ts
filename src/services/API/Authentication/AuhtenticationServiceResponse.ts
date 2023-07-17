export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
}


export interface GetLoginResponse {
    status: string;
    message: string;
    data: {
        authToken: string;
        authUser: User;
    };
}

