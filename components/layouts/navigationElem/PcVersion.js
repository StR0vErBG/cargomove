import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { TbBus } from "react-icons/tb";
import Image from "next/legacy/image";

const PcVersion = ({ pathname, servicePcState, setServicePcState, data }) => {
  return (
    <section className="container relative items-center justify-between hidden lg:flex">
      <div className="absolute select-none ">
        <div className="relative select-none w-72 h-72">
          <Image
            src="/LOGOv3-01.svg"
            alt="logo"
            layout="fill"
            className="object-contain select-none"
          />
        </div>
      </div>
      <div className="relative invisible w-64 h-20">test</div>
      <section className="flex items-center justify-center gap-x-5">
        {/* <div>
        <Hamburger toggle={setMenuOpen} toggled={menuOpen} size={20} />
      </div> */}
        <section className="">
          <ul className="flex items-center justify-center text-sm gap-x-10">
            {pathname != "/" && (
              <li>
                <Link href="/" scroll={false}>
                  Начало
                </Link>
              </li>
            )}
            {pathname == "/" && (
              <li>
                <a href="#">Начало</a>
              </li>
            )}
            <li>
              <Link href="/pricing" scroll={false}>
                Цени
              </Link>
            </li>
            <li
              className=" group"
              onMouseEnter={(e) => setServicePcState(true)}
              onMouseLeave={(e) => setServicePcState(false)}
            >
              <div className="cursor-pointer flex-center">
                <span className="">Услуги</span>
                <span
                  className={`pl-1 group-hover:rotate-90 transition-transform text-lg`}
                >
                  <TbBus />
                </span>
              </div>
              <AnimatePresence mode="wait">
                {servicePcState && (
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
                        zIndex: 0,
                      },
                      exitState: {
                        y: "-100vh",
                        zIndex: -10,
                      },
                    }}
                    className="relative flex flex-col w-full h-full "
                  >
                    <div className="absolute top-0 w-[26.5rem] h-10  -left-16"></div>
                    <ul className="absolute flex-col  py-4 pl-10 list-disc w-[26.5rem] rounded-md bg-blue-100 top-10 -left-16 flex  shadow-2xl">
                      {data.map((list, i) => {
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

            {pathname != "/aboutUs" && (
              <li>
                <Link href="/aboutUs" scroll={false}>
                  За нас
                </Link>
              </li>
            )}
            {pathname == "/aboutUs" && (
              <li>
                <a href="#" scroll={false}>
                  За нас
                </a>
              </li>
            )}
            <li>
              <Link href="/blog" scroll={false}>
                БЛОГ
              </Link>
            </li>
            <li className="px-5 py-2 rounded-sm bg-blue">
              <a href="tel:+359895063670">позвъни сега </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default PcVersion;