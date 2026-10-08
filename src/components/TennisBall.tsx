"use client";

import React from "react";

interface TennisBallProps {
  className?: string;
  size?: number;
}

export default function TennisBall({ className = "", size = 16 }: TennisBallProps) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping" />
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 shrink-0 drop-shadow-[0_0_5px_rgba(163,230,53,0.8)] animate-pulse"
      >
        <circle cx="12" cy="12" r="10" fill="#a3e635" stroke="#84cc16" strokeWidth="0.75" />
        <path
          d="M 4.93 4.93 C 9.5 7.5 9.5 16.5 4.93 19.07"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 19.07 4.93 C 14.5 7.5 14.5 16.5 19.07 19.07"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
