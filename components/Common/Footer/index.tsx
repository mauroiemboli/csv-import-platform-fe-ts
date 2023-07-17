import * as React from "react";
import { Props } from "./Footer";

const Footer: React.FunctionComponent<Props> = ({
  children = null,
}): JSX.Element => {
  return (
    <footer className="d-none">
      {" "}
      <div className="content">
        <p>
          Dominio © è un prodotto del Gruppo{" "}
          <a
            rel="noreferrer"
            href="https://www.prismacompany.it"
            target="_blank"
          >
            <u>Prisma</u>
          </a>{" "}
          | Tutti i diritti riservati 2017 - 2023{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
