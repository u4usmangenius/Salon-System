import {authHeader}from './authHeader';
import axios from 'axios';
import { baseUrl } from './apiCalls';

export const SC = {
  getCall,
  postCall,
  putCall,
  deleteCall,
};

function getCall(url) {
  return axios.get(`${baseUrl}${url}`, {
    headers: authHeader(),
  })
  .then(response => response)
  .catch(error => Promise.reject(error));
}

function postCall(url, data, callbackProgressUpload = null, source) {
  const config = {
    headers: authHeader(),
    onUploadProgress: function (progressEvent) {
      if (callbackProgressUpload) callbackProgressUpload(progressEvent);
    },
  };

  if (source) {
    config.cancelToken = source.token;
  }

  return axios.post(`${baseUrl}${url}`, data, config)
  .then(response => response)
  .catch(error => Promise.reject(error));
}

function putCall(url, data) {
  return axios.put(`${baseUrl}${url}`, data, {
    headers: authHeader(),
  })
  .then(response => response)
  .catch(error => Promise.reject(error));
}

function deleteCall(url) {
  return axios.delete(`${baseUrl}${url}`, {
    headers: authHeader(),
  })
  .then(response => response)
  .catch(error => Promise.reject(error));
}
