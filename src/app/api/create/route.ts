import { Storage } from "@google-cloud/storage";

export const GET = async () => {
  const url = `http://localhost:8080`;

  const res = await fetch(url);
  const message = await res.json();

  return Response.json({ message });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POST = async (req: any, res: any) => {
  const projectId = process.env.PROJECT_ID ?? "";
  const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS ?? "";

  const storage = new Storage({
    projectId: projectId,
    keyFilename: keyFilename,
  });

  const bucketName = process.env.BUCKET_NAME ?? "";
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(req.query.file);
  const options = {
    exprires: Date.now() + 1 * 60 * 1000,
    fields: { "x-goog-meta-test": "data" },
  };
  const [response] = await file.generateSignedPostPolicyV4(options);
  res.status(200).json(response);
};
