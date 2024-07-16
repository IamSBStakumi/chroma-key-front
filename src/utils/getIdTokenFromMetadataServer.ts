import { GoogleAuth } from "google-auth-library";

const getIdTokenFromMetadataServer = async () => {
  const googleAuth = new GoogleAuth();
  const URL = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

  const client = await googleAuth.getIdTokenClient(URL);

  const token = await client.idTokenProvider.fetchIdToken(URL);

  return token;
};

export default getIdTokenFromMetadataServer;
