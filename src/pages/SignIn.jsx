import { Box, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInRequest } from "../store/auth/authThunk";
import { useDispatch } from "react-redux";
import { Button } from "../components/UI/button/Button";
import { snackBarAction } from "../store/snackBar";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      dispatch(signInRequest(data))
        .unwrap()
        .then(() => navigate("/"))
        .catch((error) => console.log(error));

      dispatch(snackBarAction.doSuccess("Successfully "));
    } catch (error) {
      dispatch(snackBarAction.doError("Something went wrong"));
    }
  };
  return (
    <div>
      <FormStyled onSubmit={submitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}>
          <StyledTextField
            label="Email"
            variant="outlined"
            sx={{ width: "100%" }}
            value={email}
            onChange={onChangeEmailHandler}
          />

          <StyledTextField
            label="Password"
            variant="outlined"
            value={password}
            onChange={onChangePasswordHandler}
            sx={{ width: "100%" }}
          />
          <Button
            type="submit"
            style={{
              width: "200px",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#7b2807",
              border: "2px solid  #7b2807",
            }}>
            Sign in
          </Button>
          <div>
            Don't have an account? <Link to="/signup">sign up</Link>
          </div>
        </Box>
      </FormStyled>
    </div>
  );
};



const FormStyled = styled("form")`
  margin: 0 auto;
  width: 500px;
  height: 290px;
  background: linear-gradient(to top, #f12711, #f5af19);
  margin-top: 200px;
  padding: 30px;
  border-radius: 15px 20% 15px 15px;
  &:hover {
    width: 505px;
    height: 295px;
    box-shadow: 14px 3px 8px 6px #f12711;
  }
`;

const StyledTextField = styled(TextField)(() => ({
  "&.MuiTextField-root": {
    border: "none",
  },
}));
