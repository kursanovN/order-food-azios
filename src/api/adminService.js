import { axiosInstance } from "../configs/fetchAPI";

export const getAdminFoods = () => {
  return axiosInstance.get("/foods");
};

export const addAdminFoods = (data) => {
  return axiosInstance.put("/foods", data);
};
