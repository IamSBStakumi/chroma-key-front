import React, { FC } from "react";

type FormProps = {
  handleChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeVideo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UploadForm: FC<FormProps> = ({ handleChangeImage, handleChangeVideo }) => {
  return (
    <div>
      <ul>
        <li>
          <label>背景画像</label>
          <input
            type="file"
            accept=".png, .jpeg, .jpg"
            onChange={(e) => {
              handleChangeImage(e);
            }}
          />
        </li>
        <li>
          <label>合成する動画</label>
          <input
            type="file"
            accept=".mp4"
            onChange={(e) => {
              handleChangeVideo(e);
            }}
          />
        </li>
      </ul>
      <button>合成開始</button>
    </div>
  );
};

export default UploadForm;
