"use client";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/home/preloader";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useStore } from "@/store/store";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import VideoBackground from "@/components/common/videoBackground";

export default function Home() {
  const { loading, setLoading } = useStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading();
    }, 5000); // 3 seconds delay for loading

    return () => clearTimeout(timer);
  }, [setLoading]);
  return (
    <main className="overflow-hidden h-screen">
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center h-screen "
          >
            <Preloader />
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <>
              <Navbar />

              <div className="w-full absolute bottom-0  ">
                <Footer />
              </div>
              <VideoBackground />
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
