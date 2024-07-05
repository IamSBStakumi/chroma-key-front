"use client";

import { useState } from "react";
import DefaultModal from "@/components/ModalComponents";
import Explanation from "@/components/Explanation";

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

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target.files;
    if (!input || !input.length) return;
    const file = input[0] as File;
    if (!file.type.match(".png" || "jpeg")) {
      openModal("アップロードできるのは画像のみです。");

      return;
    }
    setImage(file);
    console.log(image);
  };

  const handleChangeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target.files;
    if (!input || !input.length) return;
    const file = input[0] as File;
    if (!file.type.match("video.mp4")) {
      openModal("アップロードできるのは動画のみです。");

      return;
    }
    setMovie(file);
    console.log(movie);
  };

  return (
    <main>
      <div>
        <Explanation />
        <form>
          <label>背景画像</label>
          <input
            type="file"
            accept=".png, .jpeg, .jpg"
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
          <button>合成開始</button>
        </form>
      </div>
      <DefaultModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalMessage={modalMessage} />
    </main>
  );
}
