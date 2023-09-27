import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };
  return (
    <div
      className={`w-full mx-auto p-5 fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <div
        className={`flex justify-between bg-inherit sticky top-0 z-10 ${
          scrollPosition > 0 ? `text-black` : `text-white`
        }`}
      >
        <div className="text-2xl font-semibold md:text-4xl font-display md:font-bold md:tracking-[0.2rem]">
          CodeCraftsman
        </div>
        <button
          className={`${isOpen ? `hidden` : `visible`} md:hidden`}
          onClick={toggleNav}
        >
          <AiOutlineMenu />
        </button>
        <div
          className={`${
            isOpen ? `flex flex-col text-right` : `hidden`
          } md:block`}
        >
          <button
            className={`${isOpen ? `visible` : `hidden`}`}
            onClick={toggleNav}
          >
            <AiOutlineClose />
          </button>
          <a href="#home">
            <button className="p-2">Home</button>
          </a>
          <a href="#skills">
            <button className="p-2">Skills</button>
          </a>
          <a href="#works">
            <button className="p-2">Works</button>
          </a>
          <a href="#contact">
            <button className="p-2">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
}
