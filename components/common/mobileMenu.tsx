"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(30px at calc(100% - 40px) 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return (
    <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div
        className=" absolute top-0 left-0 bottom-0 w-full"
        variants={sidebar}
      />
      <div className="bg-red-300 absolute right-0 top-0">
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
      <Navigation />
    </motion.div>
  );
};

export default MobileMenu;

const Navigationvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul variants={Navigationvariants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

const MenuItemvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i }: { i: any }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={MenuItemvariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="cursor-pointer  rounded-lg bg-transparent"
  >
    <svg width="30" height="30" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
