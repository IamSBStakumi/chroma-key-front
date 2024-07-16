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
          <label>背景画像</label>
          <input
            type="file"
            name="image"
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
