import { NextResponse } from "next/server";
import axios from "axios";
import fetchToken from "@/utils/fetchToken";

// const url = `http://localhost:8080`;
const url = `https://chroma-key-api-spbb34bsma-dt.a.run.app`;

export async function GET() {
  try {
    const token = await fetchToken();
    const response = await axios
      .get(`${url}/progress`, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => res.data);

    return new NextResponse(response, {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ progress: "0" }, { status: 500 });
  }
}
