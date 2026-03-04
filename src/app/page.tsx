"use client";

import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import DefaultModal from "@/components/Modal";
import Explanation from "@/components/Explanation";
import UploadForm from "@/components/UploadForm";
import PreviewImage from "@/components/PreviewImage";
import PreviewVideo from "@/components/PreviewVideo";
import composeFiles from "@/utils/composeFiles";
import LoadComponent from "@/components/LoadComponent";
import ComposedVideo from "@/components/ComposedVideo";
// import BetaCheckBox from "@/components/BetaCheckBox";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [video, setMovie] = useState<File | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isDisabledButton, setDisabledButton] = useState<boolean>(false);
  const [visibleError, setVisibleError] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  // const [isChecked, setChecked] = useState(false);
  const isChecked = false;

  const mutation = useMutation({
    mutationFn: ({ image, video }: { image: File; video: File }) =>
      composeFiles(image, video, isChecked),
    onMutate: () => setVideoUrl(""),
    onSuccess: (response) => {
      setDisabledButton(false);
      setVideoUrl(response);
      setVisibleError(false);
    },
    onError: () => {
      setDisabledButton(false);
      setVisibleError(true);
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
      openModal("アップロードできるのは拡張子がpngかjpegの画像のみです");

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
    const isMp4 = file.type === "video/mp4";
    const isMov = file.type === "video/quicktime";
    if (!isMp4 && !isMov) {
      openModal("アップロードできるのは拡張子がmp4またはmovの動画のみです");

      return;
    }
    setMovie(file);
  }, []);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (image === null || video === null) {
      openModal("画像または動画が\nアップロードされていません");

      return;
    }
    setDisabledButton(true);
    mutation.mutate({ image, video });
  };

  // const handleChangeCheckValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(e.target.checked);
  // };

  return (
    <main className="relative z-10 px-5 pb-12 max-w-2xl mx-auto">
      {/* ヒーローセクション */}
      <div className="pt-8">
        <Explanation />
      </div>

      {/* Betaチェックボックス */}
      {/* <div className="mb-4 animate-slide-up">
        <BetaCheckBox checked={isChecked} handleChangeValue={handleChangeCheckValue} />
      </div> */}

      {/* アップロードフォーム */}
      <div className="animate-slide-up">
        <UploadForm
          handleChangeImage={handleChangeImage}
          handleChangeVideo={handleChangeVideo}
          handleSubmit={handleSubmit}
          isDisabledButton={isDisabledButton}
        />
      </div>

      {/* ローディング */}
      {mutation.isPending && <LoadComponent />}

      {/* エラー表示 */}
      {visibleError && (
        <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-2xl p-4 text-center">
          <p className="text-red-400 text-sm">
            動画の合成に失敗しました。時間をおいてもう一度お試しください。
          </p>
        </div>
      )}

      {/* 合成結果 */}
      {videoUrl && <ComposedVideo videoUrl={videoUrl} />}

      {/* プレビューエリア（画像・動画素材の確認） */}
      {(image || video) && (
        <div className="mt-6 flex gap-4 justify-center flex-wrap animate-fade-in">
          <PreviewImage file={image} />
          <PreviewVideo file={video} />
        </div>
      )}

      {/* モーダル */}
      <DefaultModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalMessage={modalMessage} />
    </main>
  );
}
