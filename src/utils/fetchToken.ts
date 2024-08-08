import { GoogleAuth } from "google-auth-library";

const fetchToken = async () => {
  const googleAuth = new GoogleAuth();
  const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

  const client = await googleAuth.getIdTokenClient(url);

  const headers = await client.getRequestHeaders();

  return headers.Authorization;
};

export default fetchToken;
