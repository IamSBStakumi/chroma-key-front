import Image from "next/image";
import { Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";

type PreviewProps = {
  file: File | null;
};

// PreviewImage：選択した背景画像のプレビュー（ロジック維持、スタイルのみTailwind化）
const PreviewImage: FC<PreviewProps> = ({ file }) => {
  const [url, setUrl] = useState<string>("");
  const isLoading = file && !url;

  useEffect(() => {
    if (!file) return;

    // FileReaderでbase64URLを生成してプレビュー表示
    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      const res = reader!.result;
      if (res && typeof res === "string") {
        setUrl(res);
      }
    };
    reader.readAsDataURL(file);

    return () => {
      reader = null;
    };
  }, [file]);

  return file ? (
    isLoading ? (
      <Skeleton variant="rectangular" width="100%" height={200} sx={{ bgcolor: "grey.800" }} />
    ) : (
      <div className="flex-1 flex flex-col items-center gap-2">
        <p className="text-pink-400 text-xs font-bold">🖼️ 背景画像プレビュー</p>
        <Image
          src={url}
          alt={file.name}
          width={300}
          height={200}
          sizes="100vw"
          className="rounded-2xl border border-pink-500/30 w-full max-w-xs h-auto"
        />
        <p className="text-gray-500 text-xs truncate max-w-xs">{file.name}</p>
      </div>
    )
  ) : null;
};

export default PreviewImage;
