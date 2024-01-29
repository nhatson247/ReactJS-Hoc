import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (userId) => {
  return axios.get(`/api/get-all-users?id=${userId}`);
};

const createNewUserService = (data) => {
  return axios.post(`/api/create-new-users`, data);
};

const deleteUserService = (userId) => {
  return axios.delete(`/api/delete-users`, {
    data: {
      id: userId,
    },
  });
};

const editUserService = (data) => {
  return axios.put(`/api/edit-users`, data);
};

const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcodes?type=${inputType}`);
};

export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeService,
};
