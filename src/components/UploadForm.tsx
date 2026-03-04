import React, { FC } from "react";

type FormProps = {
  handleChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeVideo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabledButton: boolean;
};

const UploadForm: FC<FormProps> = ({
  handleChangeImage,
  handleChangeVideo,
  handleSubmit,
  isDisabledButton,
}) => {
  return (
    <div className="space-y-4">
      {/* 背景画像アップロード */}
      <div className="bg-linear-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-6 border border-pink-500/30">
        <label htmlFor="image" className="block text-pink-400 font-bold text-sm mb-3">
          <span aria-hidden="true">🖼️ </span>背景画像
        </label>
        <input
          id="image"
          type="file"
          name="image"
          accept=".png, .jpeg, .jpg"
          onChange={(e) => {
            handleChangeImage(e);
          }}
          className="block w-full text-gray-300 text-sm
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-pink-500/20 file:text-pink-400
            hover:file:bg-pink-500/30 file:cursor-pointer
            cursor-pointer"
        />
      </div>

      {/* 合成動画アップロード */}
      <div className="bg-linear-to-br from-green-900/40 to-green-800/40 backdrop-blur-sm rounded-3xl p-6 border border-green-500/30">
        <label htmlFor="video" className="block text-green-400 font-bold text-sm mb-3">
          <span aria-hidden="true">📹 </span>合成する動画
        </label>
        <input
          id="video"
          type="file"
          name="video"
          accept="video/mp4, video/quicktime"
          onChange={(e) => {
            handleChangeVideo(e);
          }}
          className="block w-full text-gray-300 text-sm
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-green-500/20 file:text-green-400
            hover:file:bg-green-500/30 file:cursor-pointer
            cursor-pointer"
        />
      </div>

      {/* 合成ボタン */}
      {!isDisabledButton && (
        <div className="text-center pt-2">
          <button
            onClick={(e) => handleSubmit(e)}
            className="relative inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-2xl font-bold text-lg text-black
              bg-linear-to-r from-green-400 to-green-500
              shadow-lg shadow-green-500/40
              hover:shadow-green-500/60 hover:scale-105
              active:scale-95 transition-all duration-200
              cursor-pointer"
            aria-label="合成開始"
          >
            🎬 合成開始
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
