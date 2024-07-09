import { loginStore } from '../stores/login/loginStore';

export const validateLoginForm = () => {
  const { email, password } = loginStore.formFields;

  if (!email || !password) {
    loginStore.setError('Please fill in all fields');
    return false;
  }

  // if (!isValidEmail(email)) {
  //   loginStore.setError('Please enter a valid email');
  //   return false;
  // }

  // if (!isValidPassword(password)) {
  //   loginStore.setError('Password must be at least 6 characters long');
  //   return false;
  // }

  loginStore.setError('');
  return true;
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  return password.length >= 6;
};
