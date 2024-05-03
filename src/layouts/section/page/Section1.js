import Img from "../../../assets/section/section1/Miexs_img.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { appear } from "../../../styles/animation/Animation";

const Section1 = () => {
  const ref = useInView();

  return (
    <section
      className=" bg-section1 bg-center bg-cover h-[80vh] lg:h-[100vh]"
      id="topPage"
    >
      <motion.div
        className=" container h-full flex flex-col gap-4 lg:gap-8 justify-center items-center"
        ref={ref}
        variants={appear}
        initial="hidden"
        transition={{ type: "spring", stiffness: 200 }}
        whileInView="visible"
      >
        <div className=" text-center text-[30px] lg:text-[48px] leading-[40px]">
          Welcome to
        </div>
        <img alt="" src={Img} className=" max-w-[250px] lg:max-w-[468px]" />
      </motion.div>
    </section>
  );
};
export default Section1;
