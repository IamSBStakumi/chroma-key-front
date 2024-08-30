import { GoogleAuth } from "google-auth-library";

const fetchToken = async (url: string) => {
  const googleAuth = new GoogleAuth();

  const client = await googleAuth.getIdTokenClient(url);

  const headers = await client.getRequestHeaders();

  return headers.Authorization;
};

export default fetchToken;
