import { axiosInstance } from "../configs/fetchAPI";

export const getMealsRequest = () => {
  return axiosInstance.get("/foods");
};

export const getBasketRequest = () => {
  return axiosInstance.get("/basket");
};

export const addToBasketRequest = (payload) => {
  return axiosInstance.post(`/foods/${payload.id}/addToBasket`, {
    amount: payload.amount,
  });
};

export const incrementBasketRequest = (payload) => {
  return axiosInstance.put(`/basketItem/${payload.id}/update`, {
    amount: payload.amount + 1,
  });
};

export const decrementBasketRequest = (payload) => {
  return axiosInstance.put(`/basketItem/${payload.id}/update`, {
    amount: payload.amount,
  });
};

export const deleteBasketRequest = (payload) => {
  return axiosInstance.delete(`/basketItem/${payload.id}/delete`);
};
