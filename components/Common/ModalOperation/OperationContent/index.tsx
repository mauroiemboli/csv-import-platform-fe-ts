import * as React from "react";
import { Props } from "./OperationContent";
import {
  CompleteAnimation,
  EditAnimation,
  ErrorOperationAnimation,
  LoadingAnimation,
} from "@Components/Common/Animations";
import { Button } from "@mui/material";
import ProcessIndicator from "@Components/Home/ProcessIndicator";
import { getSessionUser } from "@Services/utils";

const OperationContent: React.FunctionComponent<Props> = ({
  title,
  description,
  type,
  handleEdit,
  selectedItem,
  setOpen,
}): JSX.Element => {
  const user = getSessionUser();

  return (
    <>
      <div className={"content__title--" + type}>
        <h4>{title}</h4>
      </div>
      <div className={"content__body " + type}>
        {type === "complete" && <CompleteAnimation></CompleteAnimation>}
        {type === "loading" && (
          <ProcessIndicator userId={user[0].id}></ProcessIndicator>
        )}
        {type === "error" && (
          <ErrorOperationAnimation></ErrorOperationAnimation>
        )}
        {type === "edit" && <EditAnimation></EditAnimation>}

        <span
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, "<br />"),
          }}
        />

        {type === "edit" && (
          <div className={"button__content " + type}>
            <Button
              onClick={() => setOpen(false)}
              size="small"
              variant="outlined"
            >
              Cancel
            </Button>
            {handleEdit && (
              <Button
                className="btn__action"
                onClick={() => handleEdit(selectedItem)}
                size="small"
                variant="contained"
              >
                Confirm
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export { OperationContent };
