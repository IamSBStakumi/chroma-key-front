import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

export const GET = async () => {
  const googleAuth = new GoogleAuth();
  // const targetAudience = "https://chroma-key-front-spbb34bsma-dt.a.run.app";
  const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

  // const client = await googleAuth.getIdTokenClient(targetAudience);
  const client = await googleAuth.getIdTokenClient(url);

  const headers = await client.getRequestHeaders();

  return NextResponse.json({ message: headers.Authorization }, { status: 200 });
};
