import * as React from "react";
import Lottie from "lottie-react";
import iniAnimation from "./data/initialize.json";
import completeAnimation from "./data/complete.json";
import errorAnimation from "./data/error.json";
import loadingAnimation from "./data/loading.json";
import editAnimation from "./data/edit.json";

import { Card } from "@mui/material";

const CompleteAnimation: React.FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <>
      <Lottie
        style={{ height: 100 }}
        animationData={completeAnimation}
        loop={false}
      />
    </>
  );
};

const EditAnimation: React.FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <>
      <Lottie
        style={{ height: 100 }}
        animationData={editAnimation}
        loop={false}
      />
    </>
  );
};

const InitializeAnimation: React.FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <>
      <Card className="animation--init text-center animate__animated animate__fadeInUp">
        <Lottie
          style={{ height: 400 }}
          animationData={iniAnimation}
          loop={true}
        />
        <h3 className="mb-5">Upload your csv file to start the process</h3>
      </Card>
    </>
  );
};

const LoadingAnimation: React.FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <>
      <Lottie
        style={{ height: 92, margin: "8px" }}
        animationData={loadingAnimation}
        loop={true}
      />
    </>
  );
};

const ErrorOperationAnimation: React.FunctionComponent<{}> =
  ({}): JSX.Element => {
    return (
      <>
        <Lottie
          style={{ height: 100 }}
          animationData={errorAnimation}
          loop={false}
        />
      </>
    );
  };

const ErrorAnimation: React.FunctionComponent<{
  message?: string;
  classPage?: string;
}> = ({ message, classPage = "" }): JSX.Element => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <Card className="error__card ">
          <div className={"animation--error " + classPage}>
            <Lottie
              id="empty__anim"
              style={{
                height: 240,
                marginTop: "160px",
              }}
              animationData={errorAnimation}
              loop={false}
            />
            <h3>
              {" "}
              <b>Descrizione:</b>{" "}
              {!message ? " Errore nella richiesta" : " " + message}
            </h3>
          </div>
        </Card>
      </div>
    </>
  );
};

export {
  CompleteAnimation,
  ErrorAnimation,
  LoadingAnimation,
  ErrorOperationAnimation,
  InitializeAnimation,
  EditAnimation,
};
