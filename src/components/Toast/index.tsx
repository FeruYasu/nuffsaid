import { useEffect, useState } from "react";

import { Icon, Snackbar, SnackbarContent } from "@material-ui/core";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@material-ui/core/IconButton";

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    message && setOpen(true);
  }, [message]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={2000}
      onClose={() => setOpen(false)}
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        message={
          <span>
            <Icon />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}
