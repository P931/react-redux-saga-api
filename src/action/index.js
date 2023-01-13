export const GET_USER_FETCH = "GET_USER_FETCH";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const getapifetch = (id) => {
  return {
    type: GET_USER_FETCH,
    user: id,
  };
};

// todays

export const fetchsuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    data,
  };
};

export const fetcherror = (error) => {
  return {
    type: GET_USER_ERROR,
    error,
  };
};
