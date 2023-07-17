import * as React from "react";
import { Props } from "./Navbar";
import { MainLogo } from "../MainLogo";

const Navbar: React.FunctionComponent<Props> = ({
  className = "",
}): JSX.Element => {
  return (
    <nav className={" animate__animated animate__fadeInDown"}>
      <div className="nav__content">
        <div className="nav__content--left">
          <MainLogo></MainLogo>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
