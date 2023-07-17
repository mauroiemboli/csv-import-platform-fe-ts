import React from "react";
import Head from "next/head";

import { MainLogo } from "@Components/Common/MainLogo";
import { LoginForm } from "@Components/Login/LoginForm";

function Login() {
  return (
    <>
      <Head>
        <title>midigital - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content login text-center ">
        <h2 className="animate__animated animate__fadeIn">
          Insert your credentials
        </h2>
        <div className="login__form">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;
