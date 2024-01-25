"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function VideoBackground() {
  return (
    <div
      key="video"
      className="fixed top-0 flex flex-col items-center w-full  h-screen -z-50"
    >
      {/* Background video */}
      <video
        // src="https://inkara-nft.s3.amazonaws.com/theme-background-video.mp4"
        src="https://inkara-nft.s3.amazonaws.com/assets/background-video.mp4"
        autoPlay
        muted
        loop
        className={cn("bgvideo", "hidden md:block md:object-center")}
      />
    </div>
  );
}
