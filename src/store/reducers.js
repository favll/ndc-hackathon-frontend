import { combineReducers } from "redux-immutable";
import profile from "./profile/reducers";
import cart from "./cart/reducers";

const rootReducer = combineReducers({
  profile,
  cart
});

export default rootReducer;
