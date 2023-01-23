import { call, put, takeEvery } from "redux-saga/effects";
// import axios from "axios";

import {
  GET_API_FETCH,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
} from "./action/index.js";

function userapi(id) {
  console.log(id);
  // `https://dummyjson.com/todos/user/${id}`

  return fetch("https://dummyjson.com/todos/user/" + id)
    .then(async (res) => {
      return {
        status: res.status,
        ...(await res.json()),
      };
    })
    .catch((e) => console.log("fetch api related error :-" + e.message));
}

// function* fetchUserid(id) {
//   // console.log(id);
//   try {
//     const user = yield call(
//       axios.get,
//       "https://dummyjson.com/todos/user/" + id.user
//     );
//     console.log(id.user);
//     console.log(user);
//     // const data = res.data;
//     // yield put(fetchsuccess(res.data));
//     yield put({ type: GET_TODOS_SUCCESS, user });
//   } catch (error) {
//     console.log(error.message);
//     yield put({ type: GET_TODOS_ERROR, error });
//     yield put(fetcherror(error.message));
//   }
// }

function* fetchUserid(id) {
  try {
    // console.log("id values :- ", id);
    const user = yield call(userapi, id.user);
    console.log("user,", user);
    console.log("user.message is :- ", user.message);
    yield put({ type: GET_TODOS_SUCCESS, user });
    // yield put(getapifetch(id.userid));
  } catch (error) {
    console.log(error);
    console.log(error.message);
    yield put({ type: GET_TODOS_ERROR, error });
    // yield put(fetcherror(error));
  }
}

function* mySaga() {
  yield takeEvery(GET_API_FETCH, fetchUserid);
}

export default mySaga;
