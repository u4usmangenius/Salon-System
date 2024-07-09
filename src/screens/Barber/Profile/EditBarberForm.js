import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { editBarberStore } from "../../../stores/Barbers/EditBarberStore";
import {
  ButtonContainer,
  FormContainer,
  StyledButton,
  StyledCancelButton,
  StyledTextField,
} from "./ProfileStyle";
import { Snackbar, Alert } from "@mui/material";

const EditBarberForm = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleChange = (e) => {
    editBarberStore.setFormField(e.target.name, e.target.value);
  };

  const handleClose = () => {
    editBarberStore.setOpenModal(false);
  };

  const handleUpdate = () => {
    if (
      !editBarberStore.formFields.email ||
      !editBarberStore.formFields.name ||
      !editBarberStore.formFields.password
    ) {
      console.log("returning");
      return;
    }
    console.log(editBarberStore.formFields);
    console.log("handleUpdate function");
    editBarberStore.updateBarber();
  };

  const isValidTime = (start, end) => {
    // Check if start time is less than end time or if the end time is in the next day
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    return (
      endHour > startHour ||
      (endHour === startHour && endMinute > startMinute) ||
      endHour < startHour
    );
  };

  const handleStartHourChange = (e) => {
    const { value } = e.target;
    const endHour = editBarberStore.formFields.endhours;
    if (isValidTime(value, endHour)) {
      handleChange(e);
    } else {
      setAlertMessage("Start hour must be less than end hour.");
      setAlertOpen(true);
    }
  };

  const handleEndHourChange = (e) => {
    const { value } = e.target;
    const startHour = editBarberStore.formFields.starthours;
    if (isValidTime(startHour, value)) {
      handleChange(e);
    } else {
      setAlertMessage("End hour must be greater than start hour.");
      setAlertOpen(true);
    }
  };

  return (
    <>
      <FormContainer component="form">
        <StyledTextField
          required
          fullWidth
          label="Name"
          name="name"
          value={editBarberStore.formFields.name}
          onChange={handleChange}
        />
        <StyledTextField
          required
          fullWidth
          label="Email"
          name="email"
          value={editBarberStore.formFields.email}
          onChange={handleChange}
        />
        <StyledTextField
          required
          fullWidth
          label="Type your new password"
          name="password"
          value={editBarberStore.formFields.password}
          onChange={handleChange}
        />
        {/* <StyledTextField
          required
          fullWidth
          label="Start Hours"
          type="time"
          name="starthours"
          value={editBarberStore.formFields.starthours}
          onChange={handleStartHourChange}
        />
        <StyledTextField
          required
          fullWidth
          label="End Hours"
          type="time"
          name="endhours"
          value={editBarberStore.formFields.endhours}
          onChange={handleEndHourChange}
        /> */}
      </FormContainer>
      <ButtonContainer>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleUpdate}
        >
          Update
        </StyledButton>
        <StyledCancelButton variant="outlined" onClick={handleClose}>
          Cancel
        </StyledCancelButton>
      </ButtonContainer>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="error"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default observer(EditBarberForm);
