"use client";

import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "@/components/LoadingSpinner";

const UserReportForm = () => {
  const [isPosted, setPosted] = useState(false);
  const [message, setMessage] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const postReport = async () => {
    if (!titleRef.current || !bodyRef.current) return;
    if (titleRef.current.value === "" || bodyRef.current.value === "") {
      setMessage("タイトルまたは不具合内容が入力されていません");

      return;
    }

    const response = await fetch("/api/report", {
      method: "POST",
      body: JSON.stringify({ title: titleRef.current.value, body: bodyRef.current.value }),
    })
      .then(async (res) => await res.json())
      .then((data) => data.message);

    return response;
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
    <div>
      <input ref={titleRef} />
      <input ref={bodyRef} />
      {!isPosted && <button onClick={() => mutation.mutate()}>送信</button>}
      {mutation.isPending && <LoadingSpinner />}
      <h3>{message}</h3>
    </div>
  );
};

export default UserReportForm;
