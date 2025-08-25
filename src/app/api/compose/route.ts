import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_REQUEST_URL as string;

export const GET = async () => {
  const res = await fetch(url);
  const message = await res.json();

  return NextResponse.json({ message: message }, { status: 200 });
};

function nodeToWeb(nodeStream: Readable): ReadableStream {
  return new ReadableStream({
    start(controller) {
      nodeStream.on("data", (chunk) => controller.enqueue(chunk));
      nodeStream.on("end", () => controller.close());
      nodeStream.on("error", (err) => controller.error(err));
    },
    cancel() {
      nodeStream.destroy();
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const headers = { Authorization: "", "Content-Type": "multipart/form-data" };

    const formData = await req.formData();
    const response = await axios
      .post(`${url}/compose`, formData, {
        headers,
        responseType: "stream",
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Failed to compose video: ${res.statusText}`);
        }

        return res;
      });

    const webStream = nodeToWeb(response.data);

    return new NextResponse(webStream, {
      status: 200,
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": 'attachment; filename="composed.mp4"',
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error uploading files:", error);

    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}
