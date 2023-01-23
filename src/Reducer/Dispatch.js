import { GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "../action/index.js";

const details = {
  user: [],
  error: "",
};

// { user: [] }

const value = (state = details, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return { ...state, user: action.user };

    case GET_TODOS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default value;
