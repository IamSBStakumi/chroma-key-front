import { JWT } from "google-auth-library";

const serviceAccountKey = JSON.parse(
  Buffer.from(process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY as string, "base64").toString(),
);

const getGoogleCloudAccessToken = async () => {
  const client = new JWT({
    email: serviceAccountKey.client_email,
    key: serviceAccountKey.private_key,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

  const tokens = await client.fetchIdToken(url);
  console.info(tokens);

  return tokens;
};

// const getIdTokenFromMetadataServer = async () => {
// const targetAudience = "https://chroma-key-front-spbb34bsma-dt.a.run.app";
// const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app/compose";

// const client = await googleAuth.getIdTokenClient(targetAudience);
// const client = await googleAuth.getIdTokenClient(url);

// const res = await client.request({ url });
// console.info(res.data);

// return res.data;

//   const token = await client.idTokenProvider.fetchIdToken(targetAudience);

//   return token;
// };

// export default getIdTokenFromMetadataServer;
export default getGoogleCloudAccessToken;
