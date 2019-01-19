import * as api from "./api";
import * as types from "../constants/ActionTypes";
import { getSymbols } from "../selectors/currencies";

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

    await dispatch({
      type: types.GET_CURRENCIES_SUCCESS,
      payload: {
        items: data.rates
      }
    });
  } catch (error) {
    console.log("%c error", "color: #0087d4", error);
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
