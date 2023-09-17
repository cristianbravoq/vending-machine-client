import { axiosInstance } from "@models/axios.models";

export const getAllCoins = async () => {
  try {
    const response = await axiosInstance.get("/coins");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const insertCoins = async (valueCoin : number) => {
  try {
     console.log(valueCoin);
    const response = await axiosInstance.get(`/coins/insert/${valueCoin}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const consultInsertedCoins = async () => {
  try {
    const response = await axiosInstance.get(`/coins/inserted`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetInsertedCoins = async () => {
  try {
    const response = await axiosInstance.get(`/coins/resetCoins`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const returnInsertedCoins = async () => {
  try {
    const response = await axiosInstance.get(`/coins/return`);
    return response.data;
  } catch (error) {
    throw error;
  }
};