"use client";

// NeonBlob：背景に浮かぶネオンカラーのBlob（Compotaより移植）
const NeonBlobs = () => {
  return (
    <>
      <div className="absolute top-20 left-10 w-80 h-80 bg-green-400 rounded-full blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
    </>
  );
};

export default NeonBlobs;
