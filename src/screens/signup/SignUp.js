// SignupPage.js
import React from "react";
import { Grid, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import {
  Root,
  StyledContainer,
  FormContainer,
  ImageContainer,
  StyledTextField,
  StyledButton,
  StyledFormControl,
} from "./style";
import { signUpStore } from "../../stores/signup/signupStore";
import logo from "../../assests/logo.png";
import { validateSignupForm } from "../../helper/signupValidations";
import { toJS } from "mobx";

const validFaceShapes = ["round", "oval", "square", "heart", "diamond"];

const SignupPage = observer(() => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    signUpStore.setFormField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("usman signup formfields", signUpStore.formFields, "okkk");
    const formFields = toJS(signUpStore.formFields);
    console.log("Form Fields:", formFields);
    if (validateSignupForm()) {
      try {
        await signUpStore.signup(navigate);
      } catch (error) {
        console.log("Signup failed:", error.message);
      }
    } else {
      console.log("Form validation failed:", signUpStore.errors);
    }
  };

  return (
    <Root>
      <StyledContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
            <FormContainer component="form" onSubmit={handleSubmit}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "100px", height: "60px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">SHAPE YOUR STYLE</Typography>
                </Grid>
              </Grid>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ marginBottom: "10px" }}
              >
                Website Application
              </Typography>
              <StyledTextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={signUpStore.formFields.email || ""}
                onChange={handleChange}
                required
                error={!!signUpStore.errors.email}
                helperText={signUpStore.errors.email}
              />
              <StyledTextField
                name="name"
                label="Username"
                variant="outlined"
                fullWidth
                value={signUpStore.formFields.name || ""}
                onChange={handleChange}
                required
                error={!!signUpStore.errors.name}
                helperText={signUpStore.errors.name}
              />
              <StyledTextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={signUpStore.formFields.password || ""}
                onChange={handleChange}
                required
                inputProps={{ minLength: 8 }}
                error={!!signUpStore.errors.password}
                helperText={signUpStore.errors.password}
              />
              <StyledFormControl variant="outlined" fullWidth required error={!!signUpStore.errors.face_shape}>
                <InputLabel>Face Shape</InputLabel>
                <Select
                  name="face_shape"
                  value={signUpStore.formFields.face_shape || ""}
                  onChange={handleChange}
                  label="Face Shape"
                >
                  {validFaceShapes.map((shape) => (
                    <MenuItem key={shape} value={shape}>
                      {shape}
                    </MenuItem>
                  ))}
                </Select>
                {signUpStore.errors.face_shape && (
                  <Typography color="error" variant="body2">
                    {signUpStore.errors.face_shape}
                  </Typography>
                )}
              </StyledFormControl>
              <StyledButton
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                SIGNUP
              </StyledButton>
              {signUpStore.errors.general && (
                <Typography color="error" variant="body2" align="center">
                  {signUpStore.errors.general}
                </Typography>
              )}
            </FormContainer>
          </Grid>
          <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
            <ImageContainer></ImageContainer>
          </Grid>
        </Grid>
      </StyledContainer>
    </Root>
  );
});

export default SignupPage;
