import { makeAutoObservable, runInAction } from "mobx";
import { SC } from "../../../services/serverCall";
import axios from "axios";
import { baseUrl } from "../../../services/apiCalls";
import Swal from "sweetalert2";

class BarberStore {
  barbers = [];
  openModal = false;
  currentBarber = null;
  barberToDelete = null;
  page = 1;
  itemsPerPage = 5;
  confirmDelete = false;
  formFields = {
    name: "",
    email: "",
    specialization: "",
    password: "",
    role: "barber",
  };
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
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
  async fetchSpecificBarber() {
    this.setLoading(true);
    try {
      const response = await SC.getCall("/profile");
      console.log("yellos resspoinse", response.data.data);
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
  async fetchBarbers() {
    this.setLoading(true);
    try {
      const response = await SC.getCall("/barbers");
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
  //   const userToken = localStorage.getItem("userToken");
  //   const userTokenObj = userToken ? JSON.parse(userToken) : null;
  //   const headers = {
  //     Authorization: `${userToken}`,
  //   };

  //   const response = await axios.post(
  //     `${baseUrl}/barbers`,
  //     {
  //       barber: barber,
  //     },
  //     { headers }
  //   );
  //   if (response.status === 200) {
  //     console.log("Success usman");
  //   }
  // }

  async addBarber(barber) {
    const userTokenString = localStorage.getItem("userToken");
    const userToken = JSON.parse(userTokenString);
    const token = userToken.accessToken.token;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(`${baseUrl}/barbers`, barber, {
        headers,
      });

      if (response.status === 200) {
        // this.barbers.push(response.data);
        this.showSuccess("Successfully added new barber");
        this.fetchBarbers();
        return true; // barber added successfully
      } else {
        this.error = "Failed to add barber";
        this.showError(this.error);
        return false; // Failed to add barber
      }
    } catch (error) {
      this.error = error.message || "Failed to add barber";
      this.showError(this.error);
      return false;
    }
  }
  // async addBarber(barber) {
  //   try {
  //     const response = await SC.postCall("/barbers", barber);
  //     runInAction(() => {
  //       this.barbers.push(response.data);
  //     });
  //   } catch (error) {
  //     runInAction(() => {
  //       this.error = error.message || "Failed to add barber";
  //     });
  //     throw error;
  //   }
  // }

  async updateBarber(id, updatedBarber) {
    try {
      const userTokenString = localStorage.getItem("userToken");
      const userToken = JSON.parse(userTokenString);
      const token = userToken.accessToken.token;

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.put(
        `${baseUrl}/barbers/${id}`,
        updatedBarber,
        { headers }
      );

      const index = this.barbers.findIndex((barber) => barber.id === id);
      if (index !== -1) {
        this.barbers[index] = { ...this.barbers[index], ...response.data };
        this.showSuccess("Successfully Updated...");
        barberStore.fetchBarbers();
      }
    } catch (error) {
      this.error = error.message || "Failed to update barber";
      this.showError(this.error);
      return false;
    }
  }

  async deleteBarber(id) {
    try {
      await SC.deleteCall(`/barbers/${id}`);
      runInAction(() => {
        this.barbers = this.barbers.filter((barber) => barber.id !== id);
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message || "Failed to delete barber";
      });
      throw error;
    }
  }

  setOpenModal(open) {
    this.openModal = open;
  }

  setCurrentBarber(barber) {
    this.currentBarber = barber;
    if (barber) {
      this.setFormFields(barber);
    } else {
      this.resetFormFields();
    }
  }

  setBarberToDelete(barber) {
    this.barberToDelete = barber;
  }

  setPage(page) {
    this.page = page;
  }

  setConfirmDelete(confirm) {
    this.confirmDelete = confirm;
  }

  setFormField(name, value) {
    this.formFields[name] = value;
    console.log(name, value);
  }
  setData() {
    this.formFields.name = this.barbers?.name;
    this.formFields.email = this.barbers?.email;
    this.formFields.specialization = this.barbers?.specialization;
    console.log("oye", this.formFields);
  }
  setFormFields(fields) {
    this.formFields = { ...fields };
  }

  resetFormFields() {
    this.formFields = {
      name: "",
      email: "",
      specialization: "",
      password: "",
      role: "barber",
    };
  }

  setLoading(loading) {
    this.loading = loading;
  }

  get barbersToShow() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.barbers.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.barbers.length / this.itemsPerPage);
  }
}

const barberStore = new BarberStore();
export default barberStore;
