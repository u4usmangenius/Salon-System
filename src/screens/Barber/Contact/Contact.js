import React from "react";
import { observer } from "mobx-react-lite";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { contactFormStore } from "../../../stores/Barbers/BarbersStore/ContactUsStore";
import {
  StyledButton,
  StyledTextField,
  IconWrapper,
  InfoItem,
  InfoContainer,
  FormContainer,
  StyledContainer,
  Root,
} from "./ContactStyle";
import AdminHeader from "../../../components/headers/admin/Header";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
import { Container2, ContainerBox } from "./Style";
const ContactForm = observer(() => {
  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  const renderHeader = () => {
    switch (role) {
      case "admin":
        return <AdminHeader />;
      case "customer":
        return <CustomerHeader />;
      case "barber":
        return <BarberHeader />;
      default:
        return null;
    }
  };
  const { formFields, errors, loading, setFormField, submitForm } =
    contactFormStore;

  const handleChange = (field, value) => {
    contactFormStore.setFormField(field, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await contactFormStore.submitForm();
  };

  return (
    <>
      <ContainerBox>
        {renderHeader()}
        <Root
          style={{
            marginTop: "1.5rem",
          }}
        >
          <StyledContainer>
            <InfoContainer container>
              <Typography
                variant="h2"
                component="h1"
                color="#ffcc00"
                gutterBottom
                className="Heading"
              >
                Get in Touch
              </Typography>
              <Typography variant="body1" color="inherit" gutterBottom>
                We’re here to help and answer any questions you might have. We
                will answer your inquiries in a maximum of 48 hours.
              </Typography>
              <Container>
                <InfoItem>
                  <IconWrapper>
                    <EmailIcon />
                  </IconWrapper>
                  <Typography variant="body1" color="inherit">
                    contact@example.com
                  </Typography>
                </InfoItem>
                <InfoItem>
                  <IconWrapper>
                    <LanguageIcon />
                  </IconWrapper>
                  <Typography variant="body1" color="inherit">
                    shapeyourstyle.com
                  </Typography>
                </InfoItem>
                <InfoItem>
                  <IconWrapper>
                    <PhoneIcon />
                  </IconWrapper>
                  <Typography variant="body1" color="inherit">
                    +123 456 7890
                  </Typography>
                </InfoItem>
                <InfoItem>
                  <IconWrapper>
                    <LocationOnIcon />
                  </IconWrapper>
                  <Typography variant="body1" color="inherit">
                    123 Main St, Anytown, USA
                  </Typography>
                </InfoItem>
              </Container>
            </InfoContainer>
            <FormContainer container>
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="First Name"
                      value={formFields.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Last Name"
                      value={formFields.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formFields.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      error={!!errors.email}
                      helperText={errors.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Phone"
                      type="tel"
                      value={formFields.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <StyledTextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  value={formFields.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  error={!!errors.message}
                  helperText={errors.message}
                  variant="outlined"
                  margin="normal"
                />
                <StyledButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </StyledButton>
              </form>
            </FormContainer>
          </StyledContainer>
        </Root>
      </ContainerBox>
    </>
  );
});

export default ContactForm;
