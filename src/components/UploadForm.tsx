import React, { FC } from "react";

type FormProps = {
  handleChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeVideo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const UploadForm: FC<FormProps> = ({ handleChangeImage, handleChangeVideo, handleSubmit }) => {
  return (
    <div>
      <ul>
        <li>
          <label htmlFor="image">背景画像</label>
          <input
            id="image"
            type="file"
            name="image"
            accept=".png, .jpeg, .jpg"
            onChange={(e) => {
              handleChangeImage(e);
            }}
          />
        </li>
        <li>
          <label htmlFor="video">合成する動画</label>
          <input
            id="video"
            type="file"
            name="video"
            accept=".mp4"
            onChange={(e) => {
              handleChangeVideo(e);
            }}
          />
        </li>
      </ul>
      <button onClick={(e) => handleSubmit(e)}>合成開始</button>
    </div>
  );
};

export default UploadForm;
