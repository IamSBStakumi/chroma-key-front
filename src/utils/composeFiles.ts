"use client";

import axios from "axios";

const composeFiles = async (image: File, video: File) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("video", video);
  const blob = await axios
    .post(`/api/compose`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      responseType: "blob",
    })
    .then((res) => res.data);

  const url = URL.createObjectURL(blob);

  return url;
};

export default composeFiles;
