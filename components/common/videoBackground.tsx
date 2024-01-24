"use client";

import { cn } from "@/lib/utils";

export default function VideoBackground() {
  return (
    <div
      key="video"
      className="fixed top-0 flex flex-col items-center w-full  h-screen -z-50"
    >
      {/* Background video */}
      <video
        src="https://inkara-nft.s3.amazonaws.com/theme-background-video.mp4"
        autoPlay
        muted
        loop
        className={cn("bgvideo", "opacity-60")}
      />
    </div>
  );
}
