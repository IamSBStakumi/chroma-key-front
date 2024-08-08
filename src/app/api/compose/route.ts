import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import fetchToken from "@/utils/fetchToken";

// const url = `http://localhost:8080`;
const url = `https://chroma-key-api-spbb34bsma-dt.a.run.app`;

export const GET = async () => {
  const res = await fetch(url);
  const message = await res.json();

  return NextResponse.json({ message: message }, { status: 200 });
};

export async function POST(req: NextRequest) {
  try {
    const token = fetchToken("compose");
    const formData = await req.formData();
    const response = await axios.post(`${url}/compose`, formData, {
      headers: { Authorization: `${token}`, "Content-Type": "multipart/form-data" },
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
