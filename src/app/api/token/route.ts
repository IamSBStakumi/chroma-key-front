import { GoogleAuth } from "google-auth-library";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const googleAuth = new GoogleAuth();
    const url = "https://chroma-key-api-spbb34bsma-dt.a.run.app";

    const client = await googleAuth.getIdTokenClient(url);

    const headers = await client.getRequestHeaders();

    if (headers.Authorization) cookies().set("token", headers.Authorization, { secure: true });

    return NextResponse.json({ message: "Success" });
  } catch (error: unknown) {
    console.error("Error fetch token:", error);

    cookies().set("token", "none", { secure: true });

    return NextResponse.json({ message: "Error", token: cookies().get("token")?.value, error });
  }
}
