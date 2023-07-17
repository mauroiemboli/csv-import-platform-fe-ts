import {
    GetLoginPayload
} from "./AuthenticationServicePayload";
import { GetLoginResponse } from "./AuhtenticationServiceResponse"


declare namespace AuthenticationServiceModel {

    export interface LoginPayload {
        payload: GetLoginPayload;
    }

    export type LoginResponse = GetLoginResponse;


}

export { AuthenticationServiceModel };
