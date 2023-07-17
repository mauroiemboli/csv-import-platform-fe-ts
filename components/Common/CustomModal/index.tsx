import * as React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Props } from "./Modal";

const CustomModal: React.FunctionComponent<Props> = ({
  className,
  setOpen,
  open,
  children,
  closeButtonText,
}): JSX.Element => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        className={className + " "}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className="modal modal__component">
            {children}
            {closeButtonText && (
              <Button
                size="small"
                className="button--back"
                startIcon={<KeyboardBackspaceIcon />}
                onClick={handleClose}
              >
                {closeButtonText}
              </Button>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export { CustomModal };
