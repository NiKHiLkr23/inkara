"use client";
import { motion } from "framer-motion";

import { useState } from "react";

import ReactPlayer from "react-player/lazy";
import { VolumeSlider } from "@/components/home/volume-slider";
import {
  AudioLines,
  PauseCircle,
  Play,
  PlayCircle,
  SkipBack,
  SkipBackIcon,
  SkipForward,
  X,
} from "lucide-react";
import { useStore } from "@/store/store";
export default function AudioPlayer() {
  const { loading } = useStore();
  const [playing, setPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [player, setPlayer] = useState(false);

  const audioFiles = [
    "https://inkara-nft.s3.amazonaws.com/audio/with-no-mercy.mp3",
    "https://inkara-nft.s3.amazonaws.com/audio/fables.mp3",
  ];

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) => Math.max(0, prevTrack - 1));
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) =>
      Math.min(audioFiles.length - 1, prevTrack + 1)
    );
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const controls = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      style={{ width: player ? "200px" : "50px" }}
      transition={{ duration: 1 }}
      className={` ${
        loading && "hidden"
      } bg-theme/60 p-2 flex items-center  justify-center  fixed bottom-10 z-50 transition-all duration-1000 ease-in-out  ${
        player ? " w-full max-w-[320px]" : ""
      } rounded-xl mx-5
      
      hover:animate-background bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-400  shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      `}
    >
      {player && (
        <X
          onClick={() => setPlayer(false)}
          className="w-6 h-6 p-0.5 bg-gradient-to-b from-yellow-600 via-white to-yellow-400 rounded-full shadow-xl absolute -right-1.5 -top-1.5 cursor-pointer"
        />
      )}
      {player ? (
        <motion.div
          variants={controls}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className={`flex flex-1 items-center  rounded-xl justify-center`}
        >
          <AudioLines className="animate-pulse mr-2" />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
          >
            {/* Icon for Previous */}
            <SkipBack className="w-5 h-5 mx-2" />
          </motion.button>
          <motion.button
            onClick={handlePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {playing ? (
              <PauseCircle className="w-8 h-8 " />
            ) : (
              <Play className="w-8 h-8" />
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
          >
            <SkipForward className="w-5 h-5 mx-2" />
          </motion.button>

          {/* <VolumeSlider
            className="w-40 mx-2 z-50 "
            onValueChange={(value) => handleVolumeChange(value)}
          /> */}
        </motion.div>
      ) : playing ? (
        <motion.button
          onClick={() => {
            setPlaying(false);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=""
        >
          <PauseCircle className="w-8 h-8 " />
        </motion.button>
      ) : (
        <motion.button
          onClick={() => {
            setPlaying(true);
            setPlayer(true);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=""
        >
          <PlayCircle className="w-8 h-8 " />
        </motion.button>
      )}

      <ReactPlayer
        url={audioFiles[currentTrack]}
        playing={playing}
        controls={false}
        volume={volume}
        width={0}
        height={0}
        style={{ display: "none" }}
      />
    </motion.div>
  );
}
