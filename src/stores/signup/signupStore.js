// signupStore.js
import { makeObservable, observable, action, runInAction, toJS } from "mobx";
import { SC } from "../../services/serverCall";
import userStore from "../users/usersStore";
import Swal from "sweetalert2";
import { baseUrl } from "../../services/apiCalls";
import axios from "axios";

class SignupStore {
  formFields = {
    email: "",
    name: "",
    password: "",
    face_shape: "",
  };
  errors = {
    email: "",
    name: "",
    password: "",
    face_shape: "",
    general: "",
  };
  loading = false;

  constructor() {
    makeObservable(this, {
      formFields: observable,
      errors: observable,
      loading: observable,
      setFormField: action,
      setFieldError: action,
      clearFormFields: action,
      setError: action,
      setLoading: action,
      signup: action,
    });
  }

  setFormField(field, value) {
    this.formFields[field] = value;
  }

  setFieldError(field, error) {
    this.errors[field] = error;
  }

  clearFormFields() {
    this.formFields = {
      email: "",
      name: "",
      password: "",
      face_shape: "",
    };
  }

  setError(error) {
    this.errors.general = error;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  showSuccess(message) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  }
  showError(message) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  }
  async signup(navigate) {
    this.setLoading(true);
    try {
      const payload = toJS(this.formFields);
      const response = await axios.post(`${baseUrl}/user_signup`, payload);
      console.log("Response Data:", response.data);

      // Check the status from the response
      if (response.status === 200) {
        console.log("Navigating to home page");
        // Assuming you have to login separately to get the token later
        runInAction(() => {
          userStore.setRole("customer");
        });
        navigate("/");
        this.showSuccess("Successfully created customer account. Login Now!!");
        this.clearFormFields();
      } else {
        this.showError("Error while creating customer..");
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      runInAction(() => {
        const errorMessage =
          error.response && error.response.data.message
            ? error.response.data.message
            : "Signup failed";
        this.setError(errorMessage);
        this.showError(errorMessage);
        this.clearFormFields();
        console.log("Error Response:", error);
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}

export const signUpStore = new SignupStore();
