"use client";

import { Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";

type PreviewProps = {
  file: File | null;
};

// PreviewVideo：選択したグリーンバック動画のプレビュー（ロジック維持、スタイルのみTailwind化）
const PreviewVideo: FC<PreviewProps> = ({ file }) => {
  const [url, setUrl] = useState<string>("");
  const isLoading = file && !url;

  useEffect(() => {
    if (!file) return;

    // ObjectURLを生成してビデオプレビュー表示
    let tmpUrl = URL.createObjectURL(file);
    setUrl(tmpUrl);

    return () => {
      tmpUrl = "";
    };
  }, [file]);

  return file ? (
    isLoading ? (
      <Skeleton variant="rectangular" width="100%" height={200} sx={{ bgcolor: "grey.800" }} />
    ) : (
      <div className="flex-1 flex flex-col items-center gap-2">
        <p className="text-green-400 text-xs font-bold">📹 動画プレビュー</p>
        <video
          controls
          src={url}
          aria-label="preview-video"
          className="rounded-2xl border border-green-500/30 w-full max-w-xs h-auto"
        />
        <p className="text-gray-500 text-xs truncate max-w-xs">{file.name}</p>
      </div>
    )
  ) : null;
};

export default PreviewVideo;
