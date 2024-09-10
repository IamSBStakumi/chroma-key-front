import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

export async function POST(req: NextRequest) {
  try {
    const { title, body } = await req.json();

    const status: number = await octokit
      .request("POST /repos/IamSBStakumi/chroma-key-front/issues", {
        owner: "IamSBStakumi",
        repo: "chroma-key-front",
        title: title,
        body: body,
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res: any) => res?.status);

    if (status === 201)
      return NextResponse.json({ message: "不具合を報告いただきまして、ありがとうございます。", isSuccess: true });

    return NextResponse.json({ message: "申し訳ありませんが、投稿できませんでした。", isSuccess: false });
  } catch (error: unknown) {
    console.error("Error is occurred:", error);

    return NextResponse.json({ message: `Error: ${error}`, isSuccess: false }, { status: 500 });
  }
}
