import * as React from "react";

import { Props } from "./Alert";

const Alert: React.FunctionComponent<Props> = ({
  className = "",
  setOpen,
  open,
  children,
  closeButtonText,
}): JSX.Element => {
  const handleClose = () => setOpen(false);

  return (
    <div className={open ? "alert opened " : "alert closed"}>{children}</div>
  );
};

export { Alert };
