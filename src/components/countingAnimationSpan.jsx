"use client";

import React, { useState, useEffect, useRef } from "react";

export default function CountingAnimationSpan({ count }) {
  const [isCounting, setIsCounting] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const spanRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
          observer.disconnect();
        }
      });
    });

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      if (spanRef.current) {
        observer.unobserve(spanRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isCounting) {
      let start = 0;
      const end = count;
      const duration = 2000; // duration in milliseconds
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCurrentCount(start);
        if (start === end) {
          setIsCounting(false);
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isCounting, count]);

  return (
    <span ref={spanRef} className="text-3xl font-bold text-slate-800">
      {isCounting ? currentCount : `${count}+`}
    </span>
  );
}
