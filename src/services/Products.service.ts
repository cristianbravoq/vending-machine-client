import { axiosInstance } from '@models/axios.models';

export const getAllItems = async () => {
  try {
    const response = await axiosInstance.get('/items');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getItemById = async (itemId: number) => {
  try {
    const response = await axiosInstance.get(`/items/${itemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const saleProducts = async (itemId: number) => {
  try {
    const response = await axiosInstance.get(`/items/sale/${itemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}