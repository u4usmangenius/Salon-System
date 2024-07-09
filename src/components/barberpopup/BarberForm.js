import React from "react";
import { observer } from "mobx-react";
import {
  FormContainer,
  StyledTextField,
  StyledButton,
  StyledCancelButton,
  ButtonContainer,
} from "./AddBarberFormStyles";
import barberStore from "../../stores/admin/barbers/barberStore";

const AddBarberForm = ({ onClose }) => {
  const handleChange = (e) => {
    barberStore.setFormField(e.target.name, e.target.value);
  };

  const handleAddClick = async (e) => {
    e.preventDefault();
    if (barberStore.currentBarber) {
      await barberStore.updateBarber(
        barberStore.currentBarber.id,
        barberStore.formFields
      );
    } else {
      await barberStore.addBarber(barberStore.formFields);
    }
    onClose();
    barberStore.resetFormFields();
  };

  return (
    <FormContainer component="form" onSubmit={handleAddClick}>
      <StyledTextField
        required
        fullWidth
        label="Name"
        name="name"
        value={barberStore.formFields.name}
        onChange={handleChange}
      />
      <StyledTextField
        required
        fullWidth
        label="Email"
        name="email"
        value={barberStore.formFields.email}
        onChange={handleChange}
      />
      <StyledTextField
        required
        fullWidth
        type="password"
        label="Password"
        name="password"
        value={barberStore.formFields.password}
        onChange={handleChange}
      />
      <StyledTextField
        required
        fullWidth
        label="Specialization"
        name="specialization"
        value={barberStore.formFields.specialization}
        onChange={handleChange}
      />
      <StyledTextField
        required
        fullWidth
        label="Role"
        name="role"
        value={barberStore.formFields.role}
        onChange={handleChange}
      />
      <ButtonContainer>
        <StyledButton variant="contained" color="primary" type="submit">
          {barberStore.currentBarber ? "Update" : "Add"}
        </StyledButton>
        <StyledCancelButton variant="outlined" onClick={onClose}>
          Cancel
        </StyledCancelButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default observer(AddBarberForm);
