import axios from "axios";
import { jwtDecode } from "jwt-decode";

// const jwt = jwt_decode;

const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

const getUserName = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};

export { login, getUserName };
