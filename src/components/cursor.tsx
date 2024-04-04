"use client";
import { motion, useAnimation } from "framer-motion";
import { use, useEffect, useRef, useState } from "react";

const ENLARGE_ELE = [
  "a",
  ".cursor-enlarge",
  "button",
  "input",
  "label",
  "select",
  "textarea",
  "[tabindex]",
];
const FILL_ELE = [".cursor-fill"];
const DRAG_ELE = [".cursor-dragit"];

enum CursorType {
  DEFAULT = "default",
  ENLARGE = "enlarge",
  FILL = "fill",
  DRAG = "drag",
}

export const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.onmousemove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const targetEles = document.querySelectorAll(":hover");

      targetEles.forEach((ele) => {
        if (
          ENLARGE_ELE.some(
            (selector) => ele.matches(selector) || ele.closest(selector)
          )
        ) {
          animation.start({
            scale: 1.5,
            transition: {type:"spring", stiffness: 300, damping: 10},
          });
        } else if (
          FILL_ELE.some(
            (selector) => ele.matches(selector) || ele.closest(selector)
          )
        ) {
          if (cursorRef?.current) {
            cursorRef.current.style.backgroundColor = "white";
            cursorRef.current.style.opacity = "0.4";
          }
        } else if (
          DRAG_ELE.some(
            (selector) => ele.matches(selector) || ele.closest(selector)
          )
        ) {
          if (cursorRef?.current) {
            (cursorRef.current.innerText = "Drag"),
              (cursorRef.current.style.backgroundColor = "white");
            cursorRef.current.style.padding = "1rem";

            cursorRef.current.style.color = "black";
            animation.start({
              scale: 3,
              transition: { type:"spring", stiffness: 300, damping: 10  },
            });
          }
        } else {
          animation.start({
            scale: 1,
            transition: { type:"spring", stiffness: 300, damping: 10},
          });
          if (cursorRef?.current) {
            cursorRef.current.style.backgroundColor = "transparent";
            cursorRef.current.style.opacity = "1";
            cursorRef.current.style.color = "white";
            cursorRef.current.innerText = "";
            cursorRef.current.style.padding = "0";

          }
        }
      });
    };
  }, []);

  const animation = useAnimation();

  return (
    <motion.div
      style={{
        left: cursorPos.x,
        top: cursorPos.y,
      }}
      animate={animation}
      transition={{type:"spring", stiffness: 300, damping: 10}}
      initial={{ scale: 1 }}
      ref={cursorRef}
      className="fixed w-5 h-5 rounded-full border-2 border-white z-[1000000] pointer-events-none flex items-center justify-center text-[.5rem]"
    />
  );
};
