"use client";

import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import DefaultModal from "@/components/Modal";
import Explanation from "@/components/Explanation";
import UploadForm from "@/components/UploadForm";
import PreviewImage from "@/components/PreviewImage";
import PreviewVideo from "@/components/PreviewVideo";
import composeFiles from "@/utils/composeFiles";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [video, setMovie] = useState<File | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: ({ image, video }: { image: File; video: File }) => composeFiles(image, video),
    onMutate: () => setVideoUrl(""),
    onSuccess: (response) => {
      setVideoUrl(response);
    },
  });

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
    mutation.mutate({ image, video });
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
      {mutation.isPending && (
        <>
          <h2>
            動画を合成中です
            <br />
            この処理には時間がかかることがあります
          </h2>
          <LoadingSpinner />
        </>
      )}
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
