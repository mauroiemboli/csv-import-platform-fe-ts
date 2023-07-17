
import moment from "moment";

export const isServer = (): boolean => typeof window === "undefined";

export const getAuthToken = () => {
    let token = localStorage.getItem('authToken');
    if (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_WEB_TOKEN)
        token = process.env.NEXT_PUBLIC_WEB_TOKEN;
    return token;
};

export function formatDate(date: string | Date) {
    return moment(date).locale('IT').format("DD MMMM YYYY hh:mm");
}

export function getSessionUser() {
    if (localStorage.getItem('authUser')) {
        const userObj = localStorage.getItem('authUser');
        if (userObj) return JSON.parse(userObj);
    }
    return null;
}