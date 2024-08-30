"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "@/components/LoadingSpinner";

const UserReportForm = () => {
  const [isPosted, setPosted] = useState(false);
  const postReport = async () => {
    await fetch("/api/report", {
      method: "POST",
    });
  };

  const mutation = useMutation({
    mutationFn: postReport,
    onMutate: () => setPosted(true),
  });

  return (
    <div>
      {!isPosted && <button onClick={() => mutation.mutate()}>送信</button>}
      {mutation.isPending && <LoadingSpinner />}
    </div>
  );
};

export default UserReportForm;
