"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/10" />,
});

export default function Robot() {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const canvas = containerRef.current?.querySelector("canvas");
      if (canvas) canvas.style.opacity = document.hidden ? "0.5" : "1";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] pointer-events-none"
      style={{
        opacity: shouldLoad ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      {shouldLoad && (
        <Spline
          scene="https://prod.spline.design/XjSWHjRtugSdwaP8/scene.splinecode"
          onLoad={() => window.dispatchEvent(new Event("resize"))} 
        />
      )}
    </div>
  );
}
