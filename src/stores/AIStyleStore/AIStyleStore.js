import { makeObservable, observable, action } from "mobx";

class AIStyleStore {
  formFields = {
    email: "",
    name: "",
    password: "",
    face_shape: "",
    capturedImage: "",
  };
  errors = "";
  loading = false;
  openCamera = false;
  crop = { x: 0, y: 0 };
  zoom = 1;
  croppedAreaPixels = null;
  openCrop = false;

  constructor() {
    makeObservable(this, {
      formFields: observable,
      errors: observable,
      loading: observable,
      openCamera: observable,
      crop: observable,
      zoom: observable,
      croppedAreaPixels: observable,
      openCrop: observable,
      setFormField: action,
      clearFormFields: action,
      setError: action,
      setLoading: action,
      setOpenCamera: action,
      setCrop: action,
      setZoom: action,
      setCroppedAreaPixels: action,
      setOpenCrop: action,
      setUploadedFile: action,
    });
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
      capturedImage: "",
    };
  }

  setError(errors) {
    this.errors = errors;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  setOpenCamera(openCamera) {
    this.openCamera = openCamera;
  }

  setCrop(crop) {
    this.crop = crop;
  }

  setZoom(zoom) {
    this.zoom = zoom;
  }

  setCroppedAreaPixels(croppedAreaPixels) {
    this.croppedAreaPixels = croppedAreaPixels;
  }

  setOpenCrop(openCrop) {
    this.openCrop = openCrop;
  }

  async setUploadedFile(file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setFormField("capturedImage", reader.result);
      this.setOpenCrop(true);
    };
    reader.readAsDataURL(file);
  }
}

export const aiStyleStore = new AIStyleStore();
