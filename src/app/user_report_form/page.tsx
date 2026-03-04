"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import InputTitleField from "@/components/InputTitleField";
import InputBodyField from "@/components/InputBodyField";
import LoadingSpinner from "@/components/LoadingSpinner";

// 不具合報告フォームページ（Tailwindに書き換え）
const UserReportForm = () => {
  const [isPosted, setPosted] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const postReport = async () => {
    if (!titleRef.current || !bodyRef.current) return;
    if (titleRef.current.value === "" || bodyRef.current.value === "")
      return "タイトルまたは不具合の内容が入力されていません";

    const response = await fetch("/api/report", {
      method: "POST",
      body: JSON.stringify({
        title: titleRef.current.value,
        body: bodyRef.current.value,
      }),
    }).then(async (res) => await res.json());

    setSuccess(response.isSuccess);

    return response.message;
  };

  const mutation = useMutation({
    mutationFn: postReport,
    onMutate: () => setPosted(true),
    onSuccess: (response) => {
      setMessage(response);
      setPosted(false);
    },
  });

  return (
    <main className="relative z-10 px-5 pb-12 max-w-2xl mx-auto animate-fade-in">
      {/* ページタイトル */}
      <div className="text-center pt-8 mb-8">
        <h2 className="text-3xl font-black mb-2">
          <span className="bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            不具合報告ページ
          </span>
        </h2>
        <p className="text-gray-400 text-sm">お気づきの点があればお知らせください</p>
      </div>

      {/* フォームカード */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 animate-slide-up">
        <InputTitleField labelName="概要" inputRef={titleRef} id="title" />
        <InputBodyField labelName="不具合の内容" inputRef={bodyRef} id="body" />

        {/* 送信ボタン */}
        {!isPosted && !isSuccess && (
          <div className="text-center mt-4">
            <button
              onClick={() => mutation.mutate()}
              className="px-8 py-3 rounded-2xl font-bold text-black text-sm
                bg-linear-to-r from-green-400 to-green-500
                shadow-lg shadow-green-500/40
                hover:shadow-green-500/60 hover:scale-105
                active:scale-95 transition-all duration-200 cursor-pointer"
            >
              送信
            </button>
          </div>
        )}

        {/* ローディング */}
        {mutation.isPending && <LoadingSpinner />}

        {/* メッセージ表示 */}
        {message && <p className="text-center text-gray-300 text-sm mt-4">{message}</p>}

        {/* 送信成功後の戻るボタン */}
        {isSuccess && (
          <div className="text-center mt-4">
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 rounded-2xl font-bold text-black text-sm
                bg-linear-to-r from-green-400 to-green-500
                shadow-lg shadow-green-500/40
                hover:shadow-green-500/60 hover:scale-105
                active:scale-95 transition-all duration-200 cursor-pointer"
            >
              戻る
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default UserReportForm;
