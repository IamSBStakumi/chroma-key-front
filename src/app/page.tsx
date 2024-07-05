"use client";

import { useState } from "react";

/* eslint-disable no-alert */
export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [movie, setMovie] = useState<File | null>(null);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target.files;
    if (input == null) {
      return;
    } else if (input.length !== 1) {
      window.alert("ファイルは一枚にしてください。");

      return;
    }
    const file = input[0] as File;

    if (file.type.match(".png" || "jpeg")) {
      setImage(file);
      console.log(image);

      return;
    }
    window.alert("アップロードできるのは画像のみです。");

    return;
  };

  const handleChangeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target.files;
    if (input == null) return;
    else if (input.length !== 1) {
      window.alert("ファイルは一つにしてください。");

      return;
    }
    const file = input[0] as File;
    if (file.type.match("video.mp4")) {
      setMovie(file);
      console.log(movie);

      return;
    }
    window.alert("アップロードできるのは動画のみです。");

    return;
  };

  return (
    <main>
      <div>
        <label>背景画像</label>
        <input
          type="file"
          accept=".png, .jpeg"
          onChange={(e) => {
            handleChangeImage(e);
          }}
        />
        <label>合成する動画</label>
        <input
          type="file"
          accept=".mp4"
          onChange={(e) => {
            handleChangeMovie(e);
          }}
        />
      </div>
    </main>
  );
}
