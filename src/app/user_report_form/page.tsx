"use client";

import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { ReportFormWrapper } from "@/components/StyledComponents/WrapperComponents";
import { PageTitle } from "@/components/StyledComponents/StyledHeading";
import InputField from "@/components/InputField";
import { Button } from "@/components/StyledComponents/FormComponents";
import LoadingSpinner from "@/components/LoadingSpinner";

const UserReportForm = () => {
  const [isPosted, setPosted] = useState(false);
  const [message, setMessage] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const postReport = async () => {
    if (!titleRef.current || !bodyRef.current) return;
    if (titleRef.current.value === "" || bodyRef.current.value === "")
      return "タイトルまたは不具合の内容が入力されていません";

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
    <ReportFormWrapper>
      <PageTitle>不具合報告ページ</PageTitle>
      <InputField labelName="概要" inputRef={titleRef} id="title" />
      <InputField labelName="不具合の内容" inputRef={bodyRef} id="body" />
      {!isPosted && <Button onClick={() => mutation.mutate()}>送信</Button>}
      {mutation.isPending && <LoadingSpinner />}
      <p>{message}</p>
    </ReportFormWrapper>
  );
};

export default UserReportForm;
