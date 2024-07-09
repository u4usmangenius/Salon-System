// contactFormStore.js

import { makeAutoObservable } from "mobx";

class ContactFormStore {
  formFields = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  errors = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFormField(field, value) {
    this.formFields[field] = value;
  }

  submitForm = async () => {
    try {
      this.loading = true;

      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // After successful submission, reset form fields and loading state
      this.formFields = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      };
      this.errors = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      };

      // Optionally, perform any other actions upon successful submission
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      this.loading = false;
    }
  };
}

export const contactFormStore = new ContactFormStore();
