// HeroSection風のページ説明コンポーネント（Compotaスタイルに更新）
const Explanation = () => (
  <div className="text-center mb-8 animate-fade-in">
    {/* グラデーションタイトル */}
    <h2 className="text-4xl font-black mb-3 leading-tight">
      <span className="bg-linear-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
        グリーンバック
      </span>
      <br />
      <span className="bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        動画合成
      </span>
    </h2>
    {/* サブテキスト（テスト互換のため元のテキストを維持） */}
    <p className="text-gray-400 text-sm mb-3 whitespace-pre-wrap">
      {"グリーンバックの動画と背景画像を\nアップロードして、 合成を行うことができます"}
    </p>
    {/* バッジ */}
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
      <span className="text-green-400 text-xs font-bold">無料で今すぐ使える</span>
    </div>
  </div>
);

export default Explanation;
