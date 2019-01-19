import axios from "axios";

export const getCurrenciesRequest = () => {
  return Promise.resolve({
    data: {
      rates: {
        EUR: 0.1,
        USD: 1
      }
    }
  });
  // try {
  //   return axios.get(
  //     "https://openexchangerates.org/api/latest.json?app_id=39c8810186d74dc681e50419a787985e&symbols=USD,EUR"
  //   );
  // } catch (error) {
  //   throw error;
  // }
};
