import React, { FC } from "react";
import composeFiles from "@/utils/composeFiles";

type FormProps = {
  handleChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeVideo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UploadForm: FC<FormProps> = ({ handleChangeImage, handleChangeVideo }) => {
  return (
    <div>
      <form action={composeFiles}>
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
        <button type="submit">合成開始</button>
      </form>
    </div>
  );
};

export default UploadForm;
