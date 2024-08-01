// import { GoogleAuth } from "google-auth-library";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
  console.log(req.method);
  if (req.method !== "GET") {
    return NextResponse.json({ message: "Not Allowed Method" }, { status: 405 });
  }
  // const googleAuth = new GoogleAuth();
  // const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

  // const client = await googleAuth.getIdTokenClient(url);

  // const headers = await client.getRequestHeaders();

  return NextResponse.json({ message: "headers.Authorization" }, { status: 200 });
}
