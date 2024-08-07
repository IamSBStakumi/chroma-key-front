"use client";

import { useQuery } from "@tanstack/react-query";
// import useWebSocket from "@/hooks/useWebSocket";

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

  console.log(token);
  // const progress = useWebSocket(token);

  return <>{isPending ? <h2>接続中...</h2> : <h2>進捗率: 0%</h2>}</>;
};

export default ProgressComponent;
