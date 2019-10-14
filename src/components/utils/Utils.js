import jsonwebtoken from "jsonwebtoken";
import axios from "axios";
import moment from "moment";

export const ROLE = {
  ADMIN: "admin",
  USER: "user",
  BAND: "band"
};

export const decodeToken = token =>
  token &&
  jsonwebtoken.decode(token.slice(7), {
    complete: true
  });

export const getProfile = () => {
  const currentToken = localStorage.getItem("token");
  const token = decodeToken(currentToken);
  return token ? { user: token.payload, token: currentToken } : false;
};

export const setJwtHeader = token => {
  localStorage.setItem("token", token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else delete axios.defaults.headers.common["Authorization"];
};

export const client = () => {
  const defaultOptions = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  };

  return {
    get: (url, options = {}) =>
      axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) =>
      axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) =>
      axios.delete(url, { ...defaultOptions, ...options })
  };
};

export const createYouTubeEmbedLink = link =>
  link.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");

export const getCurrentUser = id =>
  client()
    .get(`https://rubato-no.herokuapp.com/api/person/searchById/${id}`)
    .then(res => res.data);

export const handleLogout = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
};

export const date = d => moment(d).format("DD-MM-YYYY");
