import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../actionTypes";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
    payload: {
      loading: true,
      error: false,
    },
  };
};

export const handleError = () => {
  return {
    type: FETCH_DATA_ERROR,
    payload: {
      loading: false,
      error: true,
    },
  };
};

export const handleSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      loading: false,
      error: false,
      data,
    },
  };
};
