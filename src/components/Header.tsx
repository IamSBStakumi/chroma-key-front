"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "./images/logo.png";

const homePath = "/";
const reportPath = "/user_report_form";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const toHome = () => {
    if (pathname !== homePath) {
      router.push(homePath);
    }
  };

  const toReport = () => {
    if (pathname !== reportPath) {
      router.push(reportPath);
    }
  };

  return (
    <header className="relative z-10 px-5 py-3 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
        {/* ロゴエリア */}
        <button
          onClick={toHome}
          className="flex items-center gap-3 group cursor-pointer bg-transparent border-none p-0"
        >
          {/* 新しいジャム瓶ロゴ（TikTok風シアン×ピンクグロー） */}
          <div className="relative">
            {/* ホバー時のソフトグロー */}
            <div
              className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(0,255,200,0.4), rgba(255,60,130,0.4))",
              }}
            />
            <Image
              src={logo}
              alt="compota logo"
              width={52}
              height={52}
              className="relative rounded-xl drop-shadow-lg"
            />
          </div>
          {/* サービス名テキスト（h1でアクセシビリティ対応） */}
          <h1 className="text-xl font-black bg-linear-to-r from-teal-300 via-green-300 to-pink-400 bg-clip-text text-transparent tracking-tight">
            COMPOTA
          </h1>
        </button>

        {/* ナビゲーション */}
        <nav className="flex gap-6">
          <button
            role="tab"
            onClick={toHome}
            className={`font-medium transition-colors text-sm bg-transparent border-none cursor-pointer ${
              pathname === homePath ? "text-teal-400" : "text-gray-400 hover:text-teal-400"
            }`}
          >
            動画合成
          </button>
          <button
            role="tab"
            onClick={toReport}
            className={`font-medium transition-colors text-sm bg-transparent border-none cursor-pointer ${
              pathname === reportPath ? "text-teal-400" : "text-gray-400 hover:text-teal-400"
            }`}
          >
            不具合の報告
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
