import axios from "axios";

export function loginApi() {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return axios.create({
    baseURL: "http://localhost:8888/login",
    headers: headers,
  });
}

export function noAuthApi() {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  return axios.create({
    baseURL: "http://localhost:8888/api/auth/",
    headers: headers,
  });
}

export function authApi() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `JWT ${localStorage.getItem("access")}`,
    Accept: "application/json",
  };

  return axios.create({
    baseURL: "http://localhost:8888/api/auth/",
    headers: headers,
  });
}
