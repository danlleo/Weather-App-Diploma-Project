import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../actionTypes";

const initialState = {
  data: [],
  defaultCity: "New York",
  loading: true,
  error: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };

    case FETCH_DATA_SUCCESS:
      return {
        data: action.payload.data,
        loading: action.payload.loading,
        error: action.payload.error,
      };

    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
