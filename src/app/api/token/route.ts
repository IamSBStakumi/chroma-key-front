import { GoogleAuth } from "google-auth-library";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const googleAuth = new GoogleAuth();
    const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

    const client = await googleAuth.getIdTokenClient(url);

    const headers = await client.getRequestHeaders();

    return NextResponse.json({ message: headers.Authorization }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetch token:", error);

    return NextResponse.json({ message: "Error has been occurred" }, { status: 500 });
  }
}
