import { validateFileSize, validateFileType } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

const apiUrl = process.env.REQUEST_URL as string;

export const GET = async () => {
  const res = await fetch(apiUrl);
  const message = await res.json();

  return NextResponse.json({ message: message }, { status: 200 });
};

export async function POST(req: NextRequest) {
  try {
    // SERVICE_ACCOUNT_JSON の存在確認
    const serviceAccountJsonString = process.env.SERVICE_ACCOUNT_JSON;
    if (!serviceAccountJsonString) {
      console.error("SERVICE_ACCOUNT_JSON が設定されていません");

      return NextResponse.json(
        { error: "Internal Server Error: Service Account JSON is not configured" },
        { status: 500 }
      );
    }

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

    // IAM認証: NEXT_PUBLIC_USE_MOCK_API が true の場合はスキップ
    // 本番環境では google-auth-library で対象URL向けの OIDC トークンを取得する
    const headers: Record<string, string> = {};

    try {
      if (process.env.NEXT_PUBLIC_USE_MOCK_API !== "true") {
        const auth = new GoogleAuth({
          credentials: JSON.parse(serviceAccountJsonString),
        });
        const client = await auth.getIdTokenClient(apiUrl);
        const idToken = await client.idTokenProvider.fetchIdToken(apiUrl);
        if (idToken) {
          headers["Authorization"] = `Bearer ${idToken}`;
        }
      }
    } catch (authError) {
      console.warn("Google認証トークンの取得に失敗しましたが、リクエストを継続します:", authError);
      // ローカル環境等でADCが設定されていない場合でも、とりあえずリクエストは飛ばす
    }

    const response = await fetch(`${apiUrl}/compose`, {
      method: "POST",
      headers: headers,
      body: formData,
      // fetch が formData を送信する際、自動で適切な multipart/form-data の
      // Content-Type 拡張（boundary）を設定するため、手動でヘッダーは追加しない
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error: ${response.status} ${response.statusText}`, errorText);
      // バックエンドから {"error": "..."} というJSONが返ってくる場合もあるため、
      // 可能な場合はJSONとしてパースして返す
      try {
        const errorJson = JSON.parse(errorText);

        return NextResponse.json(errorJson, { status: response.status });
      } catch {
        return NextResponse.json(
          { error: `APIリクエストに失敗しました: ${response.status}` },
          { status: response.status }
        );
      }
    }

    // 成功時: バックエンドから StreamingResponse (video/mp4) が返ってくるため、
    // Jsonとしてパースせず、そのままストリームとしてブラウザにプロキシする
    const contentType = response.headers.get("Content-Type") || "video/mp4";
    const contentDisposition =
      response.headers.get("Content-Disposition") || 'attachment; filename="composed.mp4"';

    return new NextResponse(response.body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": contentDisposition,
      },
    });
  } catch (error) {
    console.error("API proxy error:", error);

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
