"use client";

import { useQuery } from "@tanstack/react-query";
import ProgressComponent from "./ProgressComponent";
import { useEffect } from "react";

const ProgressWrapper = () => {
  const { data: token } = useQuery({
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
    enabled: false,
  });

  const ws = new WebSocket("wss://chroma-key-api-spbb34bsma-dt.a.run.app/ws");
  // const ws = new WebSocket("ws://localhost:8080/ws");

  useEffect(() => {
    ws.onopen = () => {
      if (token) ws.send(token);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProgressComponent ws={ws} />
    </>
  );
};

export default ProgressWrapper;
