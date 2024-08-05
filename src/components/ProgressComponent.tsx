"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const ProgressComponent = () => {
  const [progress, setProgress] = useState("0");

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
  });

  useEffect(() => {
    const ws = new WebSocket("wss://chroma-key-api-spbb34bsma-dt.a.run.app/ws");
    // const ws = new WebSocket("ws://localhost:8080/ws");

    ws.onopen = () => {
      if (token) ws.send(token);
    };

    ws.onmessage = (event) => {
      const e = JSON.parse(event.data);
      setProgress(e.progress);
    };

    ws.onclose = () => {};

    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send("progress");
      } else {
        clearInterval(interval);
      }
    }, 5000);

    return () => {
      setProgress("0");
      ws.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h2> 進捗率: {progress}%</h2>;
};

export default ProgressComponent;
