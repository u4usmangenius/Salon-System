import { makeObservable, observable, action, runInAction, toJS } from "mobx";
import { SC } from "../../../services/serverCall";
class BarbersStore {
  //   selectedDate = new Date();
  selectedDate = null;

  formFields = {
    name: "",
  };
  errors = "";
  loading = false;

  constructor() {
    makeObservable(this, {
      formFields: observable,
      errors: observable,
      loading: observable,
      setFormField: action,
      clearFormFields: action,
      setError: action,
      setLoading: action,
      FetchBarber: action,
      setSelectedDate: action,
    });
  }
  setSelectedDate(date) {
    this.selectedDate = date;
  }
  setFormField(field, value) {
    this.formFields[field] = value;
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

export const barbersStore = new BarbersStore();
