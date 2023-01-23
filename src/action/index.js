export const GET_API_FETCH = "GET_API_FETCH";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const getapifetch = (id) => {
  return {
    type: GET_API_FETCH,
    user: id,
  };
};

// todays

export const fetchsuccess = (data) => {
  return {
    type: GET_TODOS_SUCCESS,
    data,
  };
};

export const fetcherror = (error) => {
  return {
    type: GET_TODOS_ERROR,
    error: error,
  };
};
