import { NextRouter, useRouter as useNextRouter } from "next/router";

export const useRouter = <T>() => {
    return (useNextRouter() as unknown) as Omit<NextRouter, "query"> & {
        query: Partial<T>;
    };
};
