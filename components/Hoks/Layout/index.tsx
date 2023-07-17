/* eslint-disable no-console */
import * as React from "react";
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";
import { useState } from "react";
import { LayoutProps } from "./Layout";

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): JSX.Element => {
  const [loaderChangePage, setLoaderChangePage] = useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoaderChangePage(false);
    }, 1000);
  }, []);

  return (
    <div className={"page-wrapper "}>
      <div className="page-wrapper-content">
        <Navbar />
        {children}
      </div>
      <div className="page-wrapper-footer">
        <Footer></Footer>
      </div>
      {loaderChangePage && <div className="loadingstate visible" />}
    </div>
  );
};

export default Layout;
