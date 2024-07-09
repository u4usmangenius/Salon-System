import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { SC } from "./services/serverCall";
import { baseUrl } from "./services/apiCalls";

class ReviewStore {
  barbers = [];
  reviews = [];
  openModal = false;
  currentBarber = null;
  barberToDelete = null;
  page = 1;
  itemsPerPage = 5;
  confirmDelete = false;
  formFields = {
    barber_id: "",
    comment: "",
  };
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
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
  //   we will add reviews instesad of barber
  async AdminfetchReviews() {
    this.setLoading(true);
    try {
      // const response = await SC.getCall("/customer_reviews");
      const response = await SC.getCall("/all_reviews");
      console.log("helllllllllllo", response.data.data);
      this.reviews = await response.data.data;
      console.log(
        "data=======>,,,,,,,,,,,,,,,>>>111",
        this.reviews,
        "end response.data"
      );
      console.log("data=======>,,,,,,,,,,,,,,,>>>,reviews", this.reviews);
      console.log("reviews-----------------", this.reviews);
      return this.reviews;
    } catch (error) {
      runInAction(() => {
        this.error =
          error.message || "Failed to fetch barbers for customer role";
        console.error(this.error);
        console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrre");
        return;
      });
    } finally {
      this.setLoading(false);
      console.log("usmanaaa", this.barbers);
    }
  }
  async fetchReviews() {
    this.setLoading(true);
    try {
      // const response = await SC.getCall("/customer_reviews");
      const response = await SC.getCall("/customer/all_reviews");
      console.log("helllllllllllo", response.data.data);
      this.reviews = await response.data.data;
      console.log(
        "data=======>,,,,,,,,,,,,,,,>>>3333333",
        this.reviews,
        "end response.data"
      );
      console.log("data=======>,,,,,,,,,,,,,,,>>>,reviews", this.reviews);
      console.log("reviews-----------------", this.reviews);
      return this.reviews;
    } catch (error) {
      runInAction(() => {
        this.error =
          error.message || "Failed to fetch barbers for customer role";
        console.error(this.error);
        console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrre");
        return;
      });
    } finally {
      this.setLoading(false);
      console.log("usmanaaa", this.barbers);
    }
  }
  async fetchBarbers() {
    this.setLoading(true);
    try {
      const response = await SC.getCall("/all_barbers");
      console.log("helllllllllllo", response.data.data);
      this.barbers = response.data.data;
      return this.barbers;
    } catch (error) {
      runInAction(() => {
        this.error =
          error.message || "Failed to fetch barbers for customer role";
        console.error(this.error);
        console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrre");
        return;
      });
    } finally {
      this.setLoading(false);
      console.log("usmanaaa", this.barbers);
    }
  }

  async addReviews(data) {
    const userTokenString = localStorage.getItem("userToken");
    const userToken = JSON.parse(userTokenString);
    const token = userToken.accessToken.token;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(`${baseUrl}/reviews`, data, {
        headers,
      });

      if (response.status === 200) {
        this.barbers.push(response.data);
        this.showSuccess("Successfully posted your review..");
        await this.fetchReviews();
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

const reviewStore = new ReviewStore();
export default reviewStore;
