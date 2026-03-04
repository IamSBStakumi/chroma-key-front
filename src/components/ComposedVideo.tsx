// ComposedVideo：合成済み動画の表示とダウンロード（Tailwindに書き換え）
const ComposedVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="mt-6 animate-fade-in">
      {/* 合成結果ヘッダー */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-xs font-bold">合成完了！</span>
        </div>
        {/* ダウンロードボタン */}
        <div>
          <a
            href={videoUrl}
            download="processed_video.mp4"
            className="inline-flex items-center gap-2
              px-6 py-3 rounded-2xl font-bold text-black text-sm
              bg-linear-to-r from-green-400 to-green-500
              shadow-lg shadow-green-500/40
              hover:shadow-green-500/60 hover:scale-105
              active:scale-95 transition-all duration-200"
          >
            ⬇️ ダウンロード
          </a>
        </div>
      </div>

      {/* 動画プレビュー */}
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-4 overflow-hidden">
        <video controls src={videoUrl} className="w-full max-w-2xl mx-auto rounded-2xl block" />
      </div>
    </div>
  );
};

export default ComposedVideo;
