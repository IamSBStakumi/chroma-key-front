import { GoogleAuth } from "google-auth-library";

const googleAuth = new GoogleAuth();

const getIdTokenFromMetadataServer = async () => {
  const targetAudience = "https://chroma-key-front-spbb34bsma-dt.a.run.app";
  // const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app/compose";

  const client = await googleAuth.getIdTokenClient(targetAudience);
  // const client = await googleAuth.getIdTokenClient(url);

  // const res = await client.request({ url });
  // console.info(res.data);

  // return res.data;

  const token = await client.idTokenProvider.fetchIdToken(targetAudience);

  return token;
};

export default getIdTokenFromMetadataServer;
