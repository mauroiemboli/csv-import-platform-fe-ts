// #region Global Imports
import { Alert } from "@Interfaces";
import { NextPageContext } from "next";
import { AppProps } from "next/app";
// #endregion Global Imports

export interface ReduxNextPageContext extends NextPageContext {
    store: AppStore;
}

export interface WebAppProps extends AppProps {
    pageProps: {
        alert: Array<Alert>;
    };
}
export interface WebAppElement {
    ({ Component, pageProps, router: { route } }: AppProps): JSX.Element;
}
