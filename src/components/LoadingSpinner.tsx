"use client";

// LoadingSpinner：ネオングリーンのスピナー（Tailwind + CSS変数に書き換え）
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center my-4">
      <div className="w-14 h-14 rounded-full border-4 border-green-400/30 border-t-green-400 animate-spin shadow-lg shadow-green-400/30" />
    </div>
  );
};

export default LoadingSpinner;
