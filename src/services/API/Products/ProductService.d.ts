import {
    GetProductsPayload
} from "./ProductServicePayload";
import { GetProductsRes, UploadDataRes } from "./ProductServiceResponse"


declare namespace ProductServiceModel {

    export interface GetProductsPayload {
    }

    export type GetProductsResponse = GetProducts;
    export type GetUploadResponse = UploadDataRes;


}

export { ProductServiceModel };
