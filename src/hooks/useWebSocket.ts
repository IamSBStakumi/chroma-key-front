"use client";

import { useState, useEffect, useRef } from "react";

const useWebSocket = (token: string) => {
  const [progress, setProgress] = useState("0");
  const webSocketRef = useRef<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket("wss://chroma-key-api-spbb34bsma-dt.a.run.app/ws");
    // const ws = new WebSocket("ws://localhost:8080/ws");

    webSocketRef.current = ws;

    webSocketRef.current.onopen = () => {
      if (webSocketRef.current && token) webSocketRef.current.send(token);
    };

    webSocketRef.current.onmessage = (event) => {
      const e = JSON.parse(event.data);
      setProgress(e.progress);
    };

    const interval = setInterval(() => {
      if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
        webSocketRef.current.send("progress");
      } else {
        clearInterval(interval);
      }
    }, 5000);

    return () => {
      if (webSocketRef.current) webSocketRef.current.close();
    };
  }, [token]);

  return progress;
};

export default useWebSocket;
