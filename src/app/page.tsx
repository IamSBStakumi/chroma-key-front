"use client";

import { useState, useCallback } from "react";
import DefaultModal from "@/components/ModalComponents";
import Explanation from "@/components/Explanation";
import UploadForm from "@/components/UploadForm";
import PreviewImage from "@/components/PreviewImage";
import PreviewVideo from "@/components/PreviewVideo";
import composeFiles from "@/utils/composeFiles";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [video, setMovie] = useState<File | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const openModal = (message: string) => {
    setModalMessage(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage("");
  };

  const handleChangeImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setImage(null);

    const input = e.target.files;
    if (!input || !input.length) return;
    const file = input[0] as File;
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      openModal("アップロードできるのは画像のみです。");

      return;
    }
    setImage(file);
  }, []);

  const handleChangeVideo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMovie(null);

    const input = e.target.files;
    if (!input || !input.length) return;
    const file = input[0] as File;
    if (!file.type.match("video.mp4")) {
      openModal("アップロードできるのは動画のみです。");

      return;
    }
    setMovie(file);
  }, []);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (image === null || video === null) {
      openModal("画像または動画がアップロードされていません");

      return;
    }
    const response = await composeFiles(image, video);

    setVideoUrl(response);
  };

  return (
    <main>
      <Explanation />
      <UploadForm
        handleChangeImage={handleChangeImage}
        handleChangeVideo={handleChangeVideo}
        handleSubmit={handleSubmit}
      />
      <PreviewImage file={image} />
      <PreviewVideo file={video} />
      {videoUrl && (
        <div>
          <a href={videoUrl} download="processed_video.mp4">
            ダウンロード
          </a>
          <video controls src={videoUrl} />
        </div>
      )}
      <DefaultModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalMessage={modalMessage} />
    </main>
  );
}
