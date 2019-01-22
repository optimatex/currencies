import * as api from "./api";
import * as types from "../constants/ActionTypes";
import { getSymbols } from "../selectors/currencies";
import convertToRub from "../utils/convertToRub";

/*
  Get currencies
*/
export const getCurrencies = (params = {}) => async (dispatch, getState) => {
  try {
    await dispatch({
      type: types.GET_CURRENCIES_REQUEST
    });

    const symbols = getSymbols(getState());

    const { data } = await api.getCurrenciesRequest(symbols);

    // trabnsformation of the currencies. Comment is in the func
    const transformed = convertToRub(data.rates);

    await dispatch({
      type: types.GET_CURRENCIES_SUCCESS,
      payload: {
        items: transformed
      }
    });
  } catch (error) {
    await dispatch({
      type: types.GET_CURRENCIES_ERROR,
      payload: {
        error: error.message
      }
    });
  }
};

export const showAllCurrencies = () => ({
  type: types.SHOW_FULL_CURRENCIES
});
