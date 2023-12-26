"use client";
import { useState, FC } from "react";
import "@/app/team/team.css";

interface PaneProps {
  color: string;
  icon: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
}

const Pane: FC<PaneProps> = ({
  color,
  icon,
  title,
  subtitle,
  isActive,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer duration-1000 ease-in-out overflow-hidden relative transition-all ${
      isActive
        ? "grow w-full"
        : "min-h-[100px] min-w-[100px] lg:min-w-[150px] xl:min-w-[200px]"
    }`}
  >
    <div
      className={`absolute background bg-center bg-cover ${color} bg-no-repeat duration-1000 ease-in-out inset-0 scale-105 transition-all z-10`}
    />
    <div
      className={`absolute bg-gradient-to-b bottom-0 duration-1000ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20 ${
        isActive ? "opacity-100 translate-y-0" : ""
      }`}
    />
    <div
      className={`absolute bottom-0 duration-1000 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30 ${
        isActive ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div
        className={`bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-${color}-500 w-10`}
      >
        <i className={`fas fa-${icon}`} />
      </div>
      <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
        <div
          className={`ease-in-out font-bold duration-700 ${
            isActive
              ? "opacity-1 relative transform translate-x-0"
              : "opacity-0 relative transform translate-x-8"
          }`}
        >
          {title}
        </div>
        <div
          className={`delay-100 duration-700 ${
            isActive
              ? "opacity-1 relative transform translate-x-0"
              : "opacity-0 relative transform translate-x-8"
          }`}
        >
          {subtitle}
        </div>
      </div>
    </div>
  </div>
);

const ImageAccordion: FC = () => {
  const [activePaneIndex, setActivePaneIndex] = useState<number>(1);

  const handlePaneClick = (index: any) => {
    setActivePaneIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };

  return (
    <div className="antialiased  font-sans flex flex-col justify-center items-stretch  h-screen  sm:flex-row sm:items-center">
      <div className="flex flex-col grow items-stretch w-full lg:flex-row h-screen lg:overflow-hidden ">
        {[...Array(5).keys()].map((item, index) => (
          <Pane
            key={index}
            color={["red", "yellow", "green", "blue", "purple"][index]}
            icon={["walking", "apple-alt", "tree", "tint", "palette"][index]}
            title={["Name", "Name", "Name", "Name", "Name"][index]}
            subtitle={
              [
                "@twitter_handle",
                "@twitter_handle",
                "@twitter_handle",
                "@twitter_handle",
                "@twitter_handle",
              ][index]
            }
            isActive={index === activePaneIndex}
            onClick={() => handlePaneClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageAccordion;
