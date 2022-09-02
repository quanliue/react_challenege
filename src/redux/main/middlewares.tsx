import Services from "../service";
import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from "./actions";


const main = (store: any) => (next: any) => (action: any) => {
  let dispatch = store.dispatch;

  switch(action.type) {
    case GET_USERS: {
      Services.getUsers()
      .then((res) => {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: res
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_USERS_FAIL
        })
      });
      break;
    }
    default:
      break;
  }

  return next(action);
}

export default main;