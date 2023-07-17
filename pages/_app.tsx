// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import "../styles/main.scss";
// #endregion Local Imports
import { WebAppProps } from "@Interfaces";
import Layout from "@Components/Hoks/Layout";

const WebApp = ({ Component, pageProps, router: { route } }: WebAppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default WebApp;
