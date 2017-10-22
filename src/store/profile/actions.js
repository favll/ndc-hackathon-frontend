export const SET_PROFILE = "SET_PROFILE";

export function setProfile(firstName, lastName, profilePicture) {
  return {
    type: SET_PROFILE,
    firstName,
    lastName,
    profilePicture
  };
}
