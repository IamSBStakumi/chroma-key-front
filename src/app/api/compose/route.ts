import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_REQUEST_URL as string;

export const GET = async () => {
  const res = await fetch(url);
  const message = await res.json();

  return NextResponse.json({ message: message }, { status: 200 });
};

export async function POST(req: NextRequest) {
  try {
    const headers = { Authorization: "", "Content-Type": "multipart/form-data" };

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
