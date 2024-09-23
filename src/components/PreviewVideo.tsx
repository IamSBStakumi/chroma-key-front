"use client";

import { Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import StyledVideo from "./StyledComponents/StyledVideo";

type PreviewProps = {
  file: File | null;
};

const PreviewVideo: FC<PreviewProps> = ({ file }) => {
  const [url, setUrl] = useState<string>("");
  const isLoading = file && !url;

  useEffect(() => {
    if (!file) return;

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

  return file ? isLoading ? <Skeleton /> : <StyledVideo controls src={url} aria-label="preview-video" /> : null;
};

export default PreviewVideo;
