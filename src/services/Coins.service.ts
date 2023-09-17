import { axiosInstance } from '@models/axios.models';

export const getAllCoins = async () => {
    try {
      const response = await axiosInstance.get('/coins');
      return response.data;
    } catch (error) {
      throw error;
    }
  };