import { makeAutoObservable } from 'mobx';

class UserStore {
  user = null;
  token = null;
  role = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  setToken(token) {
    this.token = token;
  }
  
  setRole(role) {
    this.role = role;
  }

  logout() {
    this.user = null;
    this.token = null;
    this.role = null;
    localStorage.removeItem('userToken');
  }

  get isLoggedIn() {
    return !!this.token;
  }

  get userRole() {
    return this.role;
  }
}

const userStore = new UserStore();
export default userStore;
