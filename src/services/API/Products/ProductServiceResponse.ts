export interface Product {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}


export interface GetProducts {
    status: string;
    message: string;
    data: Product[];
}

export interface UploadDataRes {
    status: string;
    message: string;
    data: {
        createdCount: number;
        updatedCount: number;
        errors: string[];
    }
}