import { GET_USER_SUCCESS, GET_USER_ERROR } from "../action/index.js";

const initial = {
  data: {},
  // user: []   .......success..........
  error: null,
};

// user: []
const value = (state = { initial }, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { ...state, user: action.user };

    case GET_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default value;
