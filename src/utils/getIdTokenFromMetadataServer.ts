import { GoogleAuth } from "google-auth-library";

const getIdTokenFromMetadataServer = async () => {
  const googleAuth = new GoogleAuth();
  // const targetAudience = "https://chroma-key-front-spbb34bsma-dt.a.run.app";
  const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app/compose";

  // const client = await googleAuth.getIdTokenClient(targetAudience);
  const client = await googleAuth.getIdTokenClient(url);

  const headers = await client.getRequestHeaders();

  return headers.Authorization;
};

export default getIdTokenFromMetadataServer;
