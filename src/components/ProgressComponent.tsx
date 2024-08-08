"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const ProgressComponent = ({ isPending }: { isPending: boolean }) => {
  const [progress, setProgress] = useState("0");

  const fetchProgress = async () => {
    await axios("/api/progress").then((res) => {
      setProgress(() => res.data.progress);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProgress();
    }, 5000);
    if (!isPending) {
      setProgress("0");
      clearTimeout(timer);
    }
  }, [isPending]);

  return <>{isPending && <h2>{progress}%</h2>}</>;
};

export default ProgressComponent;
