import { baseSymbols } from "../constants/Symbols";

const initialState = {
  list: {
    isLoading: false,
    error: "",
    data: {
      items: {},
      count: 0
    },
    symbols: baseSymbols,
    isFullCurrencies: false
  }
};

export default initialState;
