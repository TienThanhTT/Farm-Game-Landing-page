import React, { useState } from "react";
import logo from "../../assets/navbar/logo.png";
import PlayButton from "../../components/items/PlayButton";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import { appear } from "../../styles/animation/Animation";

const Header = () => {
  const NavbarItems = [
    { name: "Overview", url: "#overview" },
    { name: "NFT Market", url: "#NFT_ITEM" },
    { name: "White Paper", url: "#whitepaper" },
    { name: "Roadmap", url: "#roadmap" },
    { name: "Tokenomics", url: "#tokenomics" },
  ];
  const buttonUrl = "https://farms.miexs.com/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState();
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={
        scrolled
          ? " w-full fixed h-[70px] lg:h-[100px] z-50 lg:py-2 bg-white"
          : "w-full fixed h-[70px] lg:h-[100px] z-50 lg:py-2"
      }
    >
      <div className="container">
        <div className=" flex justify-between items-center py-2">
          <div className=" max-w-[60px] lg:max-w-[84px] ">
            <a href="#hero">
              <img src={logo} alt="logo" loading="lazy" />
            </a>
          </div>

          <div className="hidden lg:flex justify-center items-center gap-8">
            {NavbarItems.map((item) => (
              <a href={item.url} key={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex">
            <PlayButton url={buttonUrl} />
          </div>
          <div
            className="flex items-center border border-gray-200 lg:hidden py-2 px-3 rounded-md"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <FaBars />
            <motion.div
              variants={appear}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ type: "spring", stiffness: 200 }}
              className={
                open
                  ? "flex flex-col bg-white absolute w-full left-0 top-14 md:top-24 lg:hidden justify-center items-center gap-4 shadow-md"
                  : "hidden"
              }
            >
              {NavbarItems.map((item) => (
                <Link
                  href={item.url}
                  key={item.url}
                  className=" hover:scale-105"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
