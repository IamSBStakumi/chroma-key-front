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

    let tmpUrl = URL.createObjectURL(file);
    setUrl(tmpUrl);

    return () => {
      tmpUrl = "";
    };
  }, [file]);

  return file ? isLoading ? <Skeleton /> : <StyledVideo controls src={url} aria-label="preview-video" /> : null;
};

export default PreviewVideo;
