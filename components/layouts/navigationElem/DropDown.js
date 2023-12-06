import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { TbBus } from "react-icons/tb";

export default function DropDown({ state, setState, links, title }) {
  return (
    <li
      className=" group"
      onMouseEnter={(e) => setState(true)}
      onMouseLeave={(e) => setState(false)}
    >
      <span className="relative cursor-pointer flex-center">
        <span className="">{title}</span>
        <span
          className={`pl-1 group-hover:rotate-90 transition-transform text-lg`}
        >
          <TbBus />
        </span>
        {state && (
          <div className="absolute top-5 w-[26.5rem] h-16  z-100 -left-16"></div>
        )}
      </span>
      <AnimatePresence mode="wait">
        {state && (
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            variants={{
              initialState: {
                y: "-100vh",
                zIndex: -10,
              },
              animateState: {
                y: 0,
                transitionEnd: {
                  zIndex: 100,
                },
              },
              exitState: {
                y: "-100vh",
                zIndex: -10,
              },
            }}
            className="relative flex flex-col w-full h-full "
          >
            <ul className="absolute flex-col  py-4 pl-10 list-disc w-[26.5rem] rounded-md bg-blue-100 top-14 -left-16 flex  shadow-2xl">
              {links.map((list, i) => {
                return (
                  <Link href={list.link} key={i} scroll={false}>
                    <motion.li
                      variants={{
                        hidden: (i) => ({
                          opacity: 0,
                          y: -50 * i,
                          zIndex: -10,
                        }),
                        visible: (i) => ({
                          opacity: 1,
                          y: 0,
                          zIndex: 0,
                          transition: {
                            delay: i * 0.05,
                          },
                        }),
                      }}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      className="px-2 py-2 transition-colors cursor-pointer hover:bg-white hover:text-blue-150"
                    >
                      {list.title}
                    </motion.li>
                  </Link>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}