"use client";

import { useState, useEffect } from "react";

const useWebSocket = () => {
  const [token, setToken] = useState<string | undefined>();

  const getToken = async () => {
    const response = await fetch(`/api/token`);
    const result = response.json();
    setToken(result);
  };
  getToken();

  useEffect(() => {
    const ws = new WebSocket("wss://chroma-key-api-spbb34bsma-dt.a.run.app/ws");

    ws.onopen = () => {
      if (token) ws.send(token);
    };

    ws.onmessage = (event) => {
      const e = JSON.parse(event.data);
      console.log(e);
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
      ws.close();
    };
  }, [token]);
};

export default useWebSocket;
