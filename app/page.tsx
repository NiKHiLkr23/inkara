"use client";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/home/preloader";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useStore } from "@/store/store";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import VideoBackground from "@/components/common/videoBackground";
import { DiscordIcon, TwitterIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            className="h-full bg-bgPrimary bg-cover bg-no-repeat overflow-y-scroll overflow-x-hidden md:bg-none"
          >
            <>
              <Navbar />

              {/* <div className="flex flex-col items-center justify-center mt-32 md:w-[500px] max-w-5xl mx-auto">
                <p className="text-center font-bold font-mono bg-gradient-to-tr from-theme to-gray-200 bg-clip-text text-transparent text-2xl pt-3">
                  Discover the magic of animated NFTs with Inkara NFT, an
                  anime-inspired animated collection.
                </p>
                <div className="flex items-center gap-5 mt-5">
                  <Link
                    href="https://twitter.com/InkaraNFT"
                    prefetch={false}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button variant="theme" className="active:scale-9 text-lg">
                      Follow
                      <TwitterIcon className="w-5 h-5  text-[#f0bb40] mt-1  ml-2" />
                    </Button>
                  </Link>
                  <Link
                    href="https://discord.com/invite/inkaranft"
                    prefetch={false}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button variant="theme" className="active:scale-95 text-lg">
                      Join <DiscordIcon className="w-5 h-5  mt-1 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div> */}

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
