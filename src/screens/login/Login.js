import React from "react";
import {
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import {
  Root,
  StyledContainer,
  FormContainer,
  ImageContainer,
  StyledTextField,
  StyledButton,
} from "./style";
import { loginStore } from "../../stores/login/loginStore";
import { validateLoginForm } from "../../helper/loginValidations";
import logo from "../../assests/logo.png";
import CustomLink from "../../components/custom-link/CustomLink";

const LoginPage = observer(() => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    loginStore.setFormField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("usman", loginStore.formFields);
    if (validateLoginForm()) {
      await loginStore.login(navigate);
    } else {
      console.log("There is something wrong!");
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
                type="email"
                fullWidth
                value={loginStore.formFields.email}
                onChange={handleChange}
                required
              />
              <StyledTextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={loginStore.formFields.password}
                onChange={handleChange}
                required
              />
              {/* <FormControl
                component="fieldset"
                style={{ marginBottom: "16px", width: "100%" }}
              >
                <FormLabel
                  component="legend"
                  style={{
                    color: "#fff",
                    paddingTop: "0.5rem",
                  }}
                  type="password"
                  required
                >
                  Select Role
                </FormLabel>
                <RadioGroup
                  row
                  name="role"
                  value={loginStore.formFields.role}
                  onChange={handleChange}
                  style={{ color: "#fff", paddingBottom: "0.5rem" }}
                >
                  <FormControlLabel
                    value="admin"
                    control={<Radio style={{ color: "#ffcc00" }} />}
                    label="Admin"
                  />
                  <FormControlLabel
                    value="user"
                    control={<Radio style={{ color: "#ffcc00" }} />}
                    label="User"
                  />
                  <FormControlLabel
                    value="barber"
                    control={<Radio style={{ color: "#ffcc00" }} />}
                    label="Barber"
                  />
                </RadioGroup>
              </FormControl> */}
              <CustomLink to="/signup">REGISTER as a New Customer!</CustomLink>
              <StyledButton
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                LOGIN
              </StyledButton>
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

export default LoginPage;
