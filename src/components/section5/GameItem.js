import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeUp } from "../../styles/animation/Animation";
const GameItem = ({ srcImg }) => {
  const ref = useInView();
  return (
    <motion.div
      className=" bg-item_background w-[120px] h-[122px] flex items-center justify-center overflow-x-scroll"
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ type: "spring", stiffness: 200 }}
    >
      <img src={srcImg} alt="" className=" " />
    </motion.div>
  );
};
export default GameItem;
