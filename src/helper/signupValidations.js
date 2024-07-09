// signupValidations.js
import { signUpStore } from "../stores/signup/signupStore";

export const validateSignupForm = () => {
  const { email, name, password, face_shape } = signUpStore.formFields;
  let isValid = true;

  if (!email) {
    signUpStore.setFieldError("email", "Please enter your email");
    isValid = false;
  } else if (!isValidEmail(email)) {
    signUpStore.setFieldError("email", "Please enter a valid email");
    isValid = false;
  } else {
    signUpStore.setFieldError("email", "");
  }

  if (!name) {
    signUpStore.setFieldError("name", "Please enter your name");
    isValid = false;
  } else if (!isValidUsername(name)) {
    signUpStore.setFieldError(
      "name",
      "The name should contain only characters and spaces"
    );
    isValid = false;
  } else {
    signUpStore.setFieldError("name", "");
  }

  if (!password) {
    signUpStore.setFieldError("password", "Please enter your password");
    isValid = false;
  } else if (!isValidPassword(password)) {
    signUpStore.setFieldError(
      "password",
      "Password must be at least 6 characters long"
    );
    isValid = false;
  } else {
    signUpStore.setFieldError("password", "");
  }

  if (!face_shape) {
    signUpStore.setFieldError("face_shape", "Please select your face shape");
    isValid = false;
  } else if (!isValidFaceShape(face_shape)) {
    signUpStore.setFieldError("face_shape", "Please select a valid face shape");
    isValid = false;
  } else {
    signUpStore.setFieldError("face_shape", "");
  }

  return isValid;
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  return password.length >= 6;
};

const isValidUsername = (name) => {
  const validCharactersRegex = /^[a-zA-Z\s]+$/;
  return validCharactersRegex.test(name);
};

const isValidFaceShape = (faceShape) => {
  const validFaceShapes = ["round", "oval", "square", "heart", "diamond"];
  return validFaceShapes.includes(faceShape.toLowerCase());
};
