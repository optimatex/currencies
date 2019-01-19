import * as api from "./api";
import * as types from "../constants/ActionTypes";
// import * as selectors from "./selectors";

/*
  Get currencies
*/
export const getCurrencies = (params = {}) => async (dispatch, getState) => {
  try {
    await dispatch({
      type: types.GET_CURRENCIES_REQUEST
    });

    const { data } = await api.getCurrenciesRequest();
    console.log("%c data", "color: #0087d4", data);
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
