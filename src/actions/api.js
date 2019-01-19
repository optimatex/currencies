import axios from "axios";

export const getCurrenciesRequest = symbols => {
  return axios.get(
    `https://openexchangerates.org/api/latest.json?app_id=39c8810186d74dc681e50419a787985e&symbols=${symbols}&base=USD`
  );
};
