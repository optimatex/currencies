import * as types from "../constants/ActionTypes";
import initialState from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CURRENCIES_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true
        }
      };
    case types.GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          data: {
            ...state.list.data,
            items: action.payload.items,
            count: action.payload.count
          }
        }
      };
  }

  return state;
}
