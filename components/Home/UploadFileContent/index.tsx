import React from "react";

import { Props } from "./UploadFileContent";
import { Button, Fade, IconButton, Tooltip } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ProductService } from "@Services/API/Products";
import { ModalOperation } from "@Components/Common/ModalOperation";

const UploadFileContent: React.FunctionComponent<Props> = ({
  uploadComplete,
  setUploadComplete,
  productsLength = 0,
  inputRef,
}): JSX.Element => {
  const [file, setFile] = React.useState<any>(null);
  const [fileName, setFileName] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [completeMessage, setCompelteMessage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [editOpen, setEditOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (file && file.target && file.target.files[0]) {
      const name = file.target.files[0].name;
      setFile(file);
      setFileName(name);
    }
  }, [file]);

  function handleOpenConfirm() {
    setModalOpen(true);
    setEditOpen(true);
    setError(false);
    setUploadComplete(false);
    setLoading(false);
  }

  async function handleConfirmUpload() {
    setEditOpen(false);
    setLoading(true);
    const result = await ProductService.UploadData(file);
    setLoading(false);
    setEditOpen(false);
    setFile(null);
    setFileName("");
    if (result != null) {
      if (typeof result === "string") {
        setError(true);
        setErrorMessage(result);
      } else {
        const { createdCount, errors, updatedCount } = result.data;
        setUploadComplete(true);
        let errorString = "";
        if (errors.length > 0) {
          errorString += errors.map((error) => `- ${error}`).join("");
        } else errorString = "- Errors: 0";
        errorString += "";
        setCompelteMessage(`- Products created: ${createdCount}
        - Products updated:  ${updatedCount} 
        ${errorString}`);
      }
    } else {
      setError(true);
      setErrorMessage("Internal Server error.");
    }
  }

  function cancelOperation() {
    setFile(null);
    setFileName("");
  }

  return (
    <>
      <div className="upload__content d-flex">
        <>
          <Fade in={file === null}>
            <Button
              startIcon={<UploadFileIcon />}
              variant="contained"
              component="label"
              className="mb-3"
            >
              {productsLength > 0 ? "Update through csv" : "Upload the csv"}
              <input
                ref={inputRef}
                accept=".csv"
                onChange={(event) => {
                  setFile(event);
                }}
                type="file"
                hidden
              />
            </Button>
          </Fade>
        </>
        <>
          <Fade in={file !== null}>
            <div className="fileName ">
              <span className="file">
                {" "}
                <DescriptionIcon /> <h5>{fileName}</h5>
              </span>
              <Tooltip title="Update values">
                <IconButton
                  onClick={() => handleOpenConfirm()}
                  aria-label="help"
                >
                  <UploadFileIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cancel Operation">
                <IconButton onClick={() => cancelOperation()} aria-label="help">
                  <DeleteForeverIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Fade>
        </>
      </div>
      <ModalOperation
        handleEdit={handleConfirmUpload}
        open={modalOpen}
        setOpen={setModalOpen}
        error={error}
        loading={loading}
        edit={editOpen}
        success={uploadComplete}
        errorMessage={errorMessage}
        completeMessage={completeMessage}
      />
    </>
  );
};

export default UploadFileContent;
