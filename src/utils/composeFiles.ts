"use client";

import axios from "axios";

const composeFiles = async (image: File, video: File) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("video", video);
  const response = await axios.post(`/api/compose`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
};

export default composeFiles;
