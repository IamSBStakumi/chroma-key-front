"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { ReportFormWrapper } from "@/components/StyledComponents/WrapperComponents";
import { PageTitle } from "@/components/StyledComponents/StyledHeading";
import InputTitleField from "@/components/InputTitleField";
import InputBodyField from "@/components/InputBodyField";
import { Button } from "@/components/StyledComponents/FormComponents";
import LoadingSpinner from "@/components/LoadingSpinner";

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
      body: JSON.stringify({ title: titleRef.current.value, body: bodyRef.current.value }),
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
    <ReportFormWrapper>
      <PageTitle>不具合報告ページ</PageTitle>
      <InputTitleField labelName="概要" inputRef={titleRef} id="title" />
      <InputBodyField labelName="不具合の内容" inputRef={bodyRef} id="body" />
      {!isPosted && !isSuccess && <Button onClick={() => mutation.mutate()}>送信</Button>}
      {mutation.isPending && <LoadingSpinner />}
      <p>{message}</p>
      {isSuccess && <Button onClick={() => router.push("/")}>戻る</Button>}
    </ReportFormWrapper>
  );
};

export default UserReportForm;
