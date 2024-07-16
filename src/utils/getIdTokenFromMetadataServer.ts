import { GoogleAuth } from "google-auth-library";

const getIdTokenFromMetadataServer = async () => {
  const targetAudience = "https://chroma-key-front-spbb34bsma-dt.a.run.app";
  const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

  const googleAuth = new GoogleAuth();

  const client = await googleAuth.getIdTokenClient(targetAudience);

  const res = await client.request({ url });

  return res.data;
};

export default getIdTokenFromMetadataServer;
