import { motion } from "framer-motion";
import { appear } from "../styles/animation/Animation";

const Title = ({ title }) => {
  return (
    <motion.div
      variants={appear}
      initial="hidden"
      whileInView="visible"
      transition={{ type: "spring", stiffness: 200 }}
      className=" bg-title_background bg-center bg-contain lg:bg-cover w-[300px] h-[90px] lg:w-[400px] lg:h-[110px] flex items-center justify-center text-[40px] lg:text-[48px] lg:leading-[60px] font-normal text-white "
    >
      {title}
    </motion.div>
  );
};
export default Title;
