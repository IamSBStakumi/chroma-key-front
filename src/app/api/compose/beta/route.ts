import { validateFileSize, validateFileType } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_REQUEST_URL as string;

export async function POST(req: NextRequest) {
  try {
    const headers = { Authorization: "", "Content-Type": "multipart/form-data" };

    const formData = await req.formData();
    const image = formData.get("image") as File;
    const video = formData.get("video") as File;

    if (!image || !video) {
      return NextResponse.json({ message: "Image and video are required" }, { status: 400 });
    }

    if (!validateFileType(image) || !validateFileType(video)) {
      return NextResponse.json({ message: "Invalid file type" }, { status: 400 });
    }

    if (!validateFileSize(image) || !validateFileSize(video)) {
      return NextResponse.json({ message: "File size exceeds limit" }, { status: 400 });
    }

    const response = await axios.post(`${url}/compose/beta`, formData, {
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

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
