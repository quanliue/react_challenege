import { GET_USERS_SUCCESS } from "./actions";

const INIT_STATE = {
  loading: false,
  users: [],
}

const Main = (state = INIT_STATE, action: any) =>  {
  switch(action.type) {
    case GET_USERS_SUCCESS: {
      let data = action.payload;
      return {
        ...state,
        loading: false,
        users: data
      }
    }
    default:
      break;
  }
  return {...state};
};

export default Main;