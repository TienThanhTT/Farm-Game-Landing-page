import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeUp } from "../../styles/animation/Animation";
const GameItem = ({ srcImg }) => {
  const ref = useInView();
  return (
    <motion.div
      className="game_item p-0 p-md-2 border  border-5 border-opacity-10 "
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
    >
      <img src={srcImg} alt="" className=" img-fluid w-100 h-auto" />
    </motion.div>
  );
};
export default GameItem;
