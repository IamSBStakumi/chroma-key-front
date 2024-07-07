"use client";

const composeFiles = (formData: FormData) => {
  const image = formData.get("image") as File;
  const video = formData.get("video") as File;
};

export default composeFiles;
