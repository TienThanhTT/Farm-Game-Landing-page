import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeDown } from "../../../styles/animation/Animation";
import Title from "../../../components/title";

const Section2 = () => {
  const ref = useInView();
  return (
    <section className=" bg-section2 h-[666px] lg:h-[888px]">
      <div
        className="container h-full flex justify-center items-center"
        id="Overview"
      >
        <motion.div
          className=" lg:bg-section2_content w-[1030px] h-[504px] relative flex flex-col lg:flex-row items-center "
          ref={ref}
          variants={fadeDown}
          initial="hidden"
          transition={{ type: "spring", stiffness: 300 }}
          whileInView="visible"
        >
          <div className="flex justify-center lg:absolute -top lg:-top-12 inset-x-0 ">
            <Title title={"About Us"} />
          </div>

          <p className=" text-lg lg:text-[22px] lg:leading-[40px] text-center max-w-[707px] lg:absolute inset-x-0 text-white lg:text-black lg:left-[17%] ">
            Welcome to the digital farm game on the BMH Farm, where every blade
            of grass sprouting becomes an exciting money-making opportunity.
            With BMH Farm, you can mine coins, expand your farm, and create
            unique NFTs with each success. Join now to explore the vibrant world
            of Play-to-Earn, where creativity and earning money blend
            seamlessly. Make sure you're ready to elevate your farm to new
            heights on the NYC chain!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Section2;
