import LoadingSpinner from "./LoadingSpinner";

// LoadComponent：動画合成中の表示（Tailwindに書き換え）
const LoadComponent = () => (
  <div className="my-8 text-center animate-fade-in">
    <p className="text-gray-300 text-base whitespace-pre-wrap mb-4">
      {"動画を合成中です\nこの処理には時間がかかることがあります"}
    </p>
    <LoadingSpinner />
    {/* グロー効果付きのプログレス表示 */}
    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-green-400 text-xs font-bold">処理中...</span>
    </div>
  </div>
);

export default LoadComponent;
