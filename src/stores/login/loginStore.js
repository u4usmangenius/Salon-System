import { makeObservable, observable, action, runInAction } from "mobx";
import { SC } from "../../services/serverCall";
import userStore from "../users/usersStore";
import { baseUrl } from "../../services/apiCalls";
import axios from "axios";
import Swal from "sweetalert2";

class LoginStore {
  formFields = {
    email: "",
    password: "",
    role: "", // Add role to formFields
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
      login: action,
    });
  }

  setFormField(field, value) {
    this.formFields[field] = value;
  }

  clearFormFields() {
    this.formFields = {
      email: "",
      password: "",
      role: "", // Clear role on form reset
    };
  }

  setError(errors) {
    this.errors = errors;
  }

  setLoading(loading) {
    this.loading = loading;
  }
  showError(message) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  }

  async login(navigate) {
    this.setLoading(true);
    try {
      // baseUrl=http://127.0.0.1:3333/api;
      // const response = await SC.postCall("/user_login", this.formFields);
      const response = await axios.post(
        `${baseUrl}/user_login`,
        this.formFields
      );
      console.log("Response Data:", response.data);
      if (
        response.data &&
        response.data.data &&
        // response.data.data.user && //not received from user
        response.data.data.role &&
        response.data.data.token &&
        response.data.data.role
      ) {
        console.log("usman", response.data);
        const { role, token } = response.data.data;
        localStorage.setItem(
          "userToken",
          JSON.stringify({ accessToken: token, role: role })
        );
        runInAction(() => {
          // userStore.setUser(user);
          userStore.setToken(token);
          userStore.setRole(role);
        });
        // navigate("/home");
        switch (role) {
          case "admin":
            navigate("/home");
            break;
          case "customer":
            navigate("/customer/home");
            break;
          case "barber":
            navigate("/barbers/dashboard");
            break;
          default:
            navigate("/unauthorized");
            break;
        }
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      runInAction(() => {
        this.setError(
          error.response ? error.response.data.message : "Login failed"
        );
        this.showError("Error..");
        console.log(error);
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}

export const loginStore = new LoginStore();
