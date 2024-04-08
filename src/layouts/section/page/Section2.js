import Background from "../../../assets/section/section2/background.png";
import Board from "../../../components/items/Board";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeDown } from "../../../styles/animation/Animation";

const Section2 = () => {
  const ref = useInView();
  return (
    <section className=" section2 wrapper position-relative d-flex justify-content-center">
      <div className="position-absolute bottom-0 start-50 translate-middle-x container-fluid p-0">
        <img src={Background} alt="section2_background" className="w-100" />
      </div>
      <div className="container row" id="Overview">
        <motion.div
          className="section2_content w-100 col-10"
          ref={ref}
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
        >
          <Board
            title="About us"
            isLightBoard={true}
            content="Welcome to the digital farm game on the MIEXSFARM, where every blade of
        grass sprouting becomes an exciting money-making opportunity. With
        MIEXSFARM, you can mine coins, expand your farm, and create unique NFTs
        with each success. Join now to explore the vibrant world of
        Play-to-Earn, where creativity and earning money blend seamlessly. Make
        sure you're ready to elevate your farm to new heights on the EVM
        platform! CA: 0x80921F1Aa330Dbc99196951d79924545a0e7aB7D"
          ></Board>
        </motion.div>
      </div>
    </section>
  );
};
export default Section2;
