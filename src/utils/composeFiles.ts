"use client";

import axios from "axios";

const composeFiles = async (image: File, video: File, isChecked: boolean) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("video", video);

  let reqUrl = `/api/compose`;
  if (isChecked) reqUrl = `/api/compose/beta`;

  const blob = await axios
    .post(reqUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      responseType: "blob",
    })
    .then((res) => res.data);

  const url = URL.createObjectURL(blob);

  return url;
};

export default composeFiles;
