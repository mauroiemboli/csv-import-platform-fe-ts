import React from "react";
import Head from "next/head";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Page404() {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="error__content animate__animated animate__fadeIn"
        style={{ marginTop: "38vh" }}
      >
        <h4
          onClick={() => history.back()}
          style={{ cursor: "pointer", marginBottom: "16px" }}
        >
          Page not found. Go back
        </h4>
        <Button
          size="medium"
          className="button--back"
          sx={{ textTransform: "initial" }}
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => history.back()}
        >
          {"Go Back"}
        </Button>
      </div>
    </>
  );
}
