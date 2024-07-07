"use client";

import { useState, useCallback } from "react";
import DefaultModal from "@/components/ModalComponents";
import Explanation from "@/components/Explanation";
import UploadForm from "@/components/UploadForm";
import PreviewImage from "@/components/PreviewImage";
import PreviewVideo from "@/components/PreviewVideo";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [movie, setMovie] = useState<File | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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

  return (
    <main>
      <Explanation />
      <UploadForm handleChangeImage={handleChangeImage} handleChangeVideo={handleChangeVideo} />
      <PreviewImage file={image} />
      <PreviewVideo file={movie} />
      <DefaultModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalMessage={modalMessage} />
    </main>
  );
}
