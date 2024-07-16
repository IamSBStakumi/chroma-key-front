"use client";

import styled from "styled-components";
import { Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";

type PreviewProps = {
  file: File | null;
};

const StyledVideo = styled.video`
  margin: auto;
  width: 300px;
`;

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

  return file ? isLoading ? <Skeleton /> : <StyledVideo src={url} /> : null;
};

export default PreviewVideo;
