import { GoogleAuth } from "google-auth-library";

const fetchToken = async () => {
  const googleAuth = new GoogleAuth();
  const url = process.env.NEXT_PUBLIC_REQUEST_URL as string;

  const client = await googleAuth.getIdTokenClient(url);

  const headers = await client.getRequestHeaders();

  return headers.Authorization;
};

export default fetchToken;
