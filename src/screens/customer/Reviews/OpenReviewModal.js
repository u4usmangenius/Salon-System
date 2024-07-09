import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import {
  FormContainer,
  StyledTextField,
  StyledButton,
  StyledCancelButton,
  ButtonContainer,
} from "./ReviewStyleForModal";
import reviewStore from "../../../stores/ReviewStore/ReviewStore";

const OpenReviewModal = ({ onClose }) => {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    const fetchBarbersData = async () => {
      try {
        const barbers = await reviewStore.fetchBarbers();
        setBarbers(barbers);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBarbersData();
  }, []);

  const handleChange = (e) => {
    reviewStore.setFormField(e.target.name, e.target.value);
  };

  const handleAddClick =(e) => {
    e.preventDefault();
    reviewStore.addReviews(reviewStore.formFields);
    onClose();
    reviewStore.resetFormFields();
  };

  return (
    <FormContainer component="form" onSubmit={handleAddClick}>
      <StyledTextField
        select
        required
        fullWidth
        label="Select a barber"
        name="barber_id"
        value={reviewStore.formFields.barber_id}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        <option value="" disabled>
          Select a barber
        </option>
        {reviewStore.barbers?.map((barber) => (
          <option key={barber.id} value={barber.id}>
            {barber.name}
          </option>
        ))}
      </StyledTextField>
      <StyledTextField
        required
        fullWidth
        label="Comment"
        name="comment"
        value={reviewStore.formFields.comment}
        onChange={handleChange}
      />
      <ButtonContainer>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleAddClick}
        >
          {/* {reviewStore.currentBarber ? "Update" : "Post Now"} */}
          Post Now
        </StyledButton>
        <StyledCancelButton variant="outlined" onClick={onClose}>
          Cancel
        </StyledCancelButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default observer(OpenReviewModal);
