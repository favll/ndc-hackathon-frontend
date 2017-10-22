import request from "../utils/request";
import formurlencoded from "form-urlencoded";
import { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET } from "../utils/constants";

const buildOptions = body => ({
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: body
});

const postRequest = (url, body) => request(url, body);

const linkedinRequest = path =>
  request(`http://ec2-54-89-213-114.compute-1.amazonaws.com:5001${path}`, {
    headers: { Authorization: `Bearer ${localStorage.accessToken}` }
  });

export function getAccessToken(code, redirectUri, clientId) {
  return postRequest(
    `http://ec2-54-89-213-114.compute-1.amazonaws.com:5000/oauth/v2/accessToken`,
    buildOptions(
      formurlencoded({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        client_id: LINKEDIN_CLIENT_ID,
        client_secret: LINKEDIN_CLIENT_SECRET
      })
    )
  );
}

export function getPersonalInformation() {
  return linkedinRequest(
    `/v1/people/~:(id,first-name,last-name,num-connections,picture-url)?format=json`
  );
}
