import Logo from "../../assets/navbar/logo.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeUp } from "../../styles/animation/Animation";

const Footer = () => {
  const ref = useInView();
  return (
    <motion.footer
      className=" bg-footer bg-cover bg-center relative h-[600px] md:h-[400px]"
      id="Tokenomics"
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
    >
      <div className=" container h-full flex justify-center items-center">
        <div className=" grid grid-cols-8 gap-y-4 lg:grid-cols-12 w-full ">
          <div className=" flex flex-col gap-8 col-span-8">
            <div className=" text-white flex flex-col gap-3">
              <span className=" text-[32px] leading-[24px] font-normal text-center lg:text-start ">
                Join Our Mailing List
              </span>
              <p className=" text-[20px] font-light hidden lg:block ">
                Be the first to hear all the lastest MiexsFarm Game news
              </p>
            </div>

            <div className=" grid grid-cols-2 lg:grid-cols-5 gap-y-4 ">
              <div className=" col-span-2 flex justify-center lg:block">
                <input
                  type="text"
                  className=" px-3 py-4 placeholder:text-black"
                  placeholder="Name"
                />
              </div>
              <div className=" col-span-2 flex justify-center lg:block">
                <input
                  type="text"
                  className=" px-3 py-4 placeholder:text-black"
                  placeholder="Email"
                />
              </div>

              <div className=" col-span-2 lg:col-span-1 flex justify-center lg:block">
                <button
                  className=" px-3 py-4 bg-[#2FD290] text-white "
                  value="Subscribe"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className=" col-span-8 lg:col-span-4 flex flex-col justify-center items-center lg:items-end gap-8 ">
            <img src={Logo} alt="" className=" img-fluid w-75 h-auto" />
            <span className=" text-uppercase text-center text-white text-lg font-light">
              © 2024 BY BMH FARM
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
