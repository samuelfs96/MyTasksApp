import axios from "axios";

// social auth service

const api_base_url = process.env.REACT_APP_API_URL;
export const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const googleApiLogin = async (request: any) => 
    await axios.post(api_base_url + `/rest-auth/google/`, {
        access_token : request.access_token,
    });