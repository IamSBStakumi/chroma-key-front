import { GoogleAuth } from "google-auth-library";

const getIdTokenFromMetadataServer = async () => {
  const googleAuth = new GoogleAuth();
  const targetAudience = "https://chroma-key-front-spbb34bsma-dt.a.run.app";
  // const URL = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

  const client = await googleAuth.getIdTokenClient(targetAudience);

  const token = await client.idTokenProvider.fetchIdToken(targetAudience);

  return token;
};

export default getIdTokenFromMetadataServer;
