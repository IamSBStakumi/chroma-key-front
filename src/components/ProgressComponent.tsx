"use client";

import { useState, useEffect } from "react";

const ProgressComponent = ({ ws }: { ws: WebSocket }) => {
  const [progress, setProgress] = useState("0");

  useEffect(() => {
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
