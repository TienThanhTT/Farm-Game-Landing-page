import React, { useState } from "react";
import logo from "../../assets/navbar/logo.png";
import PlayButton from "../../components/items/PlayButton";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import { appear } from "../../styles/animation/Animation";

const Header = () => {
  const NavbarItems = [
    { name: "Overview", url: "#Overview" },
    { name: "NFT Market", url: "#NFT_ITEM" },
    { name: "White Paper", url: "#WhitePaper" },
    { name: "Roadmap", url: "#Roadmap" },
    { name: "Tokenomics", url: "#Tokenomics" },
  ];
  const buttonUrl = "https://farms.miexs.com/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState();

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    console.log(bottom);
  };

  return (
    <header className="fixed w-full z-50">
      <div className="container">
        <div className=" flex justify-between items-center py-2">
          <div className=" max-w-[60px] lg:max-w-[84px] ">
            <img src={logo} alt="logo" />
          </div>

          <div className="hidden lg:flex justify-center items-center gap-8">
            {NavbarItems.map((item) => (
              <Link href={item.url} key={item.url}>
                {item.name}
              </Link>
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
                  ? "flex flex-col bg-white absolute w-full left-0 top-16 lg:hidden justify-center items-center gap-4 shadow-md"
                  : "hidden"
              }
            >
              {NavbarItems.map((item) => (
                <Link href={item.url} key={item.url}>
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
