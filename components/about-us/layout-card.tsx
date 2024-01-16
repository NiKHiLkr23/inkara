"use client";
import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { nftData } from "@/lib/data";

const LayoutCards = (): JSX.Element => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleSelect = (item: { id: number; image: string }) => {
    setSelectedId(item.id);
    setSelectedImage(item.image);
  };

  return (
    <div className="relative  p-2 flex flex-wrap justify-center gap-3 max-w-md mx-auto md:max-w-lg">
      {nftData.map((item, index) => (
        <motion.div
          key={item.id}
          layoutId={item.id.toString()}
          onClick={() => handleSelect(item)}
          className="cusor-pointer"
        >
          <Image
            width={1000}
            height={1000}
            src={item.image}
            alt="Bonnie Avatar"
            className="rounded-lg w-24 h-24 object-cover scale-95 opacity-80"
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="absolute inset-0 bg-black/20 p-4 "
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={selectedId.toString()}
            onClick={() => setSelectedId(null)}
          >
            <div className="flex items-center justify-center">
              <Image
                width={1000}
                height={1000}
                src={selectedImage}
                alt="Bonnie Avatar"
                className="rounded-lg w-[380px] object-cover scale-95"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LayoutCards;
