import * as React from "react";

import { Props } from "./ModalOperation";
import { CustomModal } from "../CustomModal";
import { OperationContent } from "./OperationContent";

const ModalOperation: React.FunctionComponent<Props> = ({
  setOpen,
  open,
  loading,
  error,
  success,
  edit,
  handleEdit,
  errorMessage,
  completeMessage,
}): JSX.Element => {
  return (
    <div>
      <CustomModal className={"operation--modal"} open={open} setOpen={setOpen}>
        <>
          {success && (
            <OperationContent
              type="complete"
              title={"Operation complete"}
              description={
                completeMessage
                  ? completeMessage
                  : "Operation completed successfully."
              }
            ></OperationContent>
          )}
          {loading && (
            <OperationContent
              type="loading"
              title={"Loading csv"}
              description={"Parsing ongoing."}
            ></OperationContent>
          )}
          {edit && (
            <OperationContent
              handleEdit={handleEdit}
              setOpen={setOpen}
              type="edit"
              title={"Upload products"}
              description={
                "By clicking confirm you will insert or update the full products list in your csv."
              }
            ></OperationContent>
          )}

          {error && (
            <OperationContent
              type="error"
              title={"Operation not completed"}
              description={
                errorMessage ? errorMessage : "The operation was not successful"
              }
            ></OperationContent>
          )}
        </>
      </CustomModal>
    </div>
  );
};

export { ModalOperation };
