import { makeObservable, observable, action, runInAction, toJS } from "mobx";
import { SC } from "../../services/serverCall";
import barberStore from "../admin/barbers/barberStore";
import axios from "axios";
import { baseUrl } from "../../services/apiCalls";
import Swal from "sweetalert2";
class EditBarberStore {
  //   selectedDate = new Date();
  selectedDate = null;
  openModal = false;

  formFields = {
    id: "",
    name: "",
    email: "",
    password: "",
    starthours: "",
    endhours: "",
  };
  errors = "";
  loading = false;

  constructor() {
    makeObservable(this, {
      openModal: observable,
      formFields: observable,
      errors: observable,
      loading: observable,
      setOpenModal: action,
      setFormField: action,
      clearFormFields: action,
      setError: action,
      setLoading: action,
      FetchBarber: action,
      setSelectedDate: action,
    });
  }
  setOpenModal(open) {
    this.openModal = open;
  }
  setSelectedDate(date) {
    this.selectedDate = date;
  }
  setFormField(field, value) {
    this.formFields[field] = value;
    console.log(field, value);
  }

  clearFormFields() {
    this.formFields = {
      email: "",
      name: "",
      password: "",
      face_shape: "",
    };
  }

  setError(errors) {
    this.errors = errors;
  }

  setLoading(loading) {
    this.loading = loading;
  }
  setData() {
    this.formFields.name = barberStore.barbers?.name;
    this.formFields.email = barberStore.barbers?.email;
    this.formFields.specialization = barberStore.barbers?.specialization;
    this.formFields.id = barberStore.barbers?.id;
    console.log("oye", this.formFields);
  }

  showError(message) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  }
  showSuccess(message) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  }

  async updateBarber() {
    try {
      const userTokenString = localStorage.getItem("userToken");
      const userToken = JSON.parse(userTokenString);
      const token = userToken.accessToken.token;

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const id = this.formFields.id;
      const response = await axios.put(
        `${baseUrl}/update_profile`,
        this.formFields,
        { headers }
      );
      if (response.status === 200) {
        this.showSuccess("Successfully updated");
        editBarberStore.setOpenModal(false);
      }
    } catch (error) {
      this.error = error.message || "Failed to update barber";
      this.showError(this.error);
      editBarberStore.setOpenModal(false);
      return false;
    }
  }

  async FetchBarber() {
    this.setLoading(true);
    try {
      const payload = toJS(this.formFields);
      // console.log('Request Payload:', payload);
      const response = await SC.postCall("/user_signup", payload);
      console.log("Response Data:", response.data);
    } catch (error) {
      runInAction(() => {
        const errorMessage = error.response
          ? error.response.data.message
          : "Signup failed";
        this.setError(errorMessage);
        console.log("Error Response:", error);
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}

export const editBarberStore = new EditBarberStore();
