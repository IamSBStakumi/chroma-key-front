import Image from "next/image";
import { Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";

type PreviewProps = {
  file: File | null;
};

const PreviewImage: FC<PreviewProps> = ({ file }) => {
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

  return file ? (
    isLoading ? (
      <Skeleton />
    ) : (
      <Image
        src={url}
        alt={file.name}
        width={300}
        height={200}
        sizes="100vw"
        style={{ width: "50%", height: "auto" }}
      />
    )
  ) : null;
};

export default PreviewImage;
