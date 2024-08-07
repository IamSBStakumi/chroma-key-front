"use client";

import { useQuery } from "@tanstack/react-query";
import useWebSocket from "@/hooks/useWebSocket";

const ProgressComponent = () => {
  const { data: token, isPending } = useQuery({
    queryKey: ["token"],
    queryFn: async () => {
      const response = await fetch("/api/token", {
        method: "get",
      });
      const result = await response.json();

      return result.message;
    },
    gcTime: Infinity,
    staleTime: Infinity,
  });

  const { data: message, isLoading } = useQuery({
    queryKey: ["message"],
    queryFn: async () => {
      const response = await fetch("/api/compose", {
        method: "get",
      });
      const result = await response.json();

      return result.message;
    },
    gcTime: Infinity,
    staleTime: Infinity,
  });

  const progress = useWebSocket(token);

  return (
    <>
      {!isLoading && { message }}
      {isPending ? <h2>接続中...</h2> : <h2>進捗率: {progress}%</h2>}
    </>
  );
};

export default ProgressComponent;
