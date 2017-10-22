import { SET_PROFILE } from "./actions";
import { fromJS } from "immutable";

const initialState = fromJS({
  firstName: null,
  lastName: null,
  profilePicture: null
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      const { firstName, lastName, profilePicture } = action;
      console.log(action);
      return state
        .set("firstName", firstName)
        .set("lastName", lastName)
        .set("profilePicture", profilePicture);
    default:
      return state;
  }
}

export default profileReducer;
