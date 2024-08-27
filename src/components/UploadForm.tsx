import React, { FC } from "react";
import { LabelText, Input, Button } from "./StyledComponents/FormComponents";

type FormProps = {
  handleChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeVideo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const UploadForm: FC<FormProps> = ({ handleChangeImage, handleChangeVideo, handleSubmit }) => {
  return (
    <>
      <LabelText htmlFor="image">背景画像</LabelText>
      <Input
        id="image"
        type="file"
        name="image"
        accept=".png, .jpeg, .jpg"
        onChange={(e) => {
          handleChangeImage(e);
        }}
      />
      <LabelText htmlFor="video">合成する動画</LabelText>
      <Input
        id="video"
        type="file"
        name="video"
        accept=".mp4"
        onChange={(e) => {
          handleChangeVideo(e);
        }}
      />
      <div style={{ textAlign: "center" }}>
        <Button onClick={(e) => handleSubmit(e)}>合成開始</Button>
      </div>
    </>
  );
};

export default UploadForm;
