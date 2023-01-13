import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_USER_FETCH,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./action/index.js";

function userapi(id) {
  console.log(id);
  // `https://dummyjson.com/todos/user/${id}`
  return fetch("https://dummyjson.com/todos/user/" + id)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((e) => console.log("fetch api related error :-" + e.message));

  //  const res  = axios.get("https://dummyjson.com/todos/user/" + id);
  //   console.log(res.data);
  //   set
}

function* fetchUserid(data) {
  try {
    // console.log("data values :- ", data);
    const userid = yield call(userapi, data.user);

    console.log(userid);
    yield put({ type: GET_USER_SUCCESS, userid: userid });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    yield put({ type: GET_USER_ERROR, message: error.message });
  }
}

function* mySaga() {
  yield takeEvery(GET_USER_FETCH, fetchUserid);
}

export default mySaga;
