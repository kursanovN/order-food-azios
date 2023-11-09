import { Alert, Snackbar, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const SnackBar = ({ handleClose, bgColor }) => {
  const { severity, message, open } = useSelector((state) => state.snackbar);

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <StyledAlert
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}
          bgcolor={bgColor}
        >
          {message}
        </StyledAlert>
      </Snackbar>
    </div>
  );
};

const StyledAlert = styled(Alert)(({ bgcolor, color }) => ({
  backgroundColor: bgcolor ? bgcolor : "",
  color: "black",
}));
