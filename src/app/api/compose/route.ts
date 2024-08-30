import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import fetchToken from "@/utils/fetchToken";

const isDevelop = process.env.NEXT_PUBLIC_IS_DEVELOP;
const url = isDevelop
  ? (process.env.NEXT_PUBLIC_REQUEST_URL as string)
  : "https://chroma-key-api-spbb34bsma-dt.a.run.app";

export const GET = async () => {
  const res = await fetch(url);
  const message = await res.json();

  return NextResponse.json({ message: message }, { status: 200 });
};

export async function POST(req: NextRequest) {
  try {
    // 環境によってトークンを取得するか分岐
    const headers = { Authorization: "", "Content-Type": "multipart/form-data" };
    if (!process.env.NEXT_PUBLIC_IS_DEVELOP) {
      headers.Authorization = `${await fetchToken(url)}`;
    }

    const formData = await req.formData();
    const response = await axios.post(`${url}/compose`, formData, {
      headers,
      responseType: "stream",
    });

    return new NextResponse(response.data, {
      status: 200,
      headers: { "Content-Type": "video/mp4" },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error uploading files:", error);

    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
