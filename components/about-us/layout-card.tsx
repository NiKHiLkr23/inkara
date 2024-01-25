"use client";
import React from "react";
import { nftData, nftVideoData } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const LayoutCards = (): JSX.Element => {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  return (
    <div className="relative  py-2 flex  justify-center gap-3 max-w-md mx-auto md:max-w-[484px] lg:max-w-[550px] ">
      <div className="flex items-center justify-center  ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs md:max-w-[380px] lg:max-w-[450px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {nftVideoData.map((item, index) => (
              <CarouselItem key={index}>
                <div className=" ">
                  <video
                    src={item.videoUrl}
                    autoPlay
                    muted
                    loop
                    className="rounded-lg w-[370px] lg:w-[500px] object-cover scale-95"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default LayoutCards;
