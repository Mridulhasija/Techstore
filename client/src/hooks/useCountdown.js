import { useState, useEffect } from "react";

export function useCountdown(initialH = 8, initialM = 34, initialS = 12) {
  const [time, setTime] = useState({ h: initialH, m: initialM, s: initialS });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  return { hrs: pad(time.h), mins: pad(time.m), secs: pad(time.s) };
}
