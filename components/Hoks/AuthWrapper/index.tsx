import { useAuthentication } from "@Hooks//authentication";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AuthWrapper = (WrappedComponent: NextPage<any>) => {
  const ProtectedRoute: NextPage<any> = (props) => {
    const { isAuthenticated, loading } = useAuthentication();

    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        router.push("/login");
      }
    }, [isAuthenticated, loading, router]);

    return (
      <>
        {loading ? (
          <div className="loadingstate visible" />
        ) : isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : null}
      </>
    );
  };

  return ProtectedRoute;
};

export default AuthWrapper;
