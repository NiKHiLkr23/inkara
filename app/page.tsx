"use client";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/home/preloader";
import { useEffect, useState } from "react";

import { useStore } from "@/store/store";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import VideoBackground from "@/components/common/videoBackground";
import AudioPlayer from "@/components/home/audio-player";

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
            className="h-full bg-bgPrimary bg-cover bg-no-repeat overflow-y-scroll overflow-x-hidden md:bg-none "
          >
            <Navbar />

            <div className="w-full absolute bottom-0  ">
              <Footer />
            </div>
            <VideoBackground />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
