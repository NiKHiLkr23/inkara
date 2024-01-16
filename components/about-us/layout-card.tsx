"use client";
import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { nftData } from "@/lib/data";
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
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="relative  py-2 flex flex-wrap justify-center gap-3 max-w-md mx-auto md:max-w-[484px]">
      <div className="flex items-center justify-center ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {nftData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.image}
                    alt="Bonnie Avatar"
                    className="rounded-lg w-[380px] object-cover scale-95"
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
