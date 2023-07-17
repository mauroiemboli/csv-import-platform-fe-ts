import * as React from "react";
import { Props } from "./MainLogo";

const MainLogo: React.FunctionComponent<Props> = ({
  className,
}): JSX.Element => {
  function handleClick() {
    //
  }
  return (
    <>
      <img
        onClick={() => handleClick()}
        style={{ height: "80px", width: "102px" }}
        src={process.env.NEXT_PUBLIC_BASE_PATH + "/images/logo.png"}
        alt="logo"
        className={"logo " + className}
      />
    </>
  );
};

export { MainLogo };
