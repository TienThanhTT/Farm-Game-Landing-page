import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeUp } from "../../styles/animation/Animation";
const GameItem = ({ srcImg }) => {
  const ref = useInView();
  return (
    <motion.img
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ type: "spring", stiffness: 200 }}
      src={srcImg}
      alt=""
      className="bg-item_background bg-cover w-[120px] h-[122px] flex items-center justify-center px-4 py-4 "
    />
  );
};
export default GameItem;
