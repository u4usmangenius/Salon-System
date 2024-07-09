// src/stores/AppointmentStore.js
import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";
import Swal from "sweetalert2";
import { baseUrl } from "../../services/apiCalls";
import { SC } from "../../services/serverCall";

class AppointmentStore {
  formFields = {
    date: "",
    time: "",
    barber_id: "",
    service: "",
  };
  errors = "";
  loading = false;
  barbers = [];
  appointments = [];
  constructor() {
    makeObservable(this, {
      formFields: observable,
      errors: observable,
      setFormField: action,
      clearFormFields: action,
      setError: action,
    });
  }

  setLoading(loading) {
    this.loading = loading;
  }

  showError(message) {
    Swal.fire({
      icon: "warning",
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
  async fetchBarbers() {
    this.setLoading(true);
    try {
      const response = await SC.getCall("/all_barbers");
      console.log("helllllllllllo", response.data.data);
      this.barbers = response.data.data;
    } catch (error) {
      runInAction(() => {
        this.error = error.message || "Failed to fetch barbers";
        console.error(this.error);
      });
    } finally {
      this.setLoading(false);
      console.log("usmanaaa", this.barbers);
    }
  }

  // fetchAppointmentsAdmin
  async fetchAppointmentsAdmin() {
    this.setLoading(true);
    try {
      const response = await SC.getCall("/all_appointments");
      console.log("jjjjjjjjjj", response.data);
      console.log("gttt appointments", response.data);
      this.appointments = response.data;
      return this.appointments;
    } catch (error) {
      runInAction(() => {
        this.error = error.message || "Failed to fetch barbers";
        console.error(this.error);
      });
    } finally {
      this.setLoading(false);
      console.log("usmanaaa appointments", this.appointments);
    }
  }
  async fetchAppointments() {
    this.setLoading(true);
    try {
      const response = await SC.getCall("/barber_appointments");
      console.log("jjjjjjjjjj", response.data);
      console.log("gttt appointments", response.data.data);
      this.appointments = response.data.data;
      return this.appointments;
    } catch (error) {
      runInAction(() => {
        this.error = error.message || "Failed to fetch barbers";
        console.error(this.error);
      });
    } finally {
      this.setLoading(false);
      console.log("usmanaaa appointments", this.appointments);
    }
  }

  async handleSubmit(navigate) {
    this.setLoading(true);
    console.log("ooye", this.formFields);
    try {
      const userTokenString = localStorage.getItem("userToken");
      const userToken = JSON.parse(userTokenString);
      const token = userToken.accessToken.token;

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const barber_id = this.formFields.barber_id;
      const service = this.formFields.service;
      const time = this.formFields.time;
      const date = this.formFields.date;

      const formData = {
        barberId: barber_id,
        date: date,
        time: time,
        service: service,
      };
      console.log("hhhhhhhhhhhhhey", formData, "byyyyyyyye");
      console.log("oyeeeeeeeeeee", barber_id, time, date);

      const response = await axios.post(`${baseUrl}/appointments`, formData, {
        headers,
      });
      console.log("Response Data:", response.data);
      if (response.data.status === 200) {
        console.log("usman", response.data);
        this.showSuccess("Successfully created appointment.");
        this.clearFormFields();
        navigate("../customer/home");
      } else if (
        response.data.message ===
        "An appointment is already scheduled at this time."
      ) {
        this.showError("Appointment with same time already exists.");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      runInAction(() => {
        console.log("response.messsss", error);
        if (
          error.response &&
          error.response.data.message ===
            "An appointment is already scheduled at this time."
        ) {
          this.showError("Appointment with same time already exists.");
        } else {
          this.setError(
            error.response ? error.response.data.message : "Login failed"
          );
          this.showError("Something went wrong.");
        }
        console.log(error);
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  setFormField(field, value) {
    this.formFields[field] = value;
    console.log("usman");
    console.log(field, value);
  }

  clearFormFields() {
    this.formFields = {
      date: "",
      time: "",
      barber_id: "",
      service: "",
    };
  }

  setError(errors) {
    this.errors = errors;
  }
}

const appointmentStore = new AppointmentStore();
export default appointmentStore;
