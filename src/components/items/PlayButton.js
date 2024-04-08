import TextTitle from "./TextTitle";
import img from "../../assets/components/bg_button.png";
import button from "../../assets/components/play_button.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeUp } from "../../styles/animation/Animation";

const PlayButton = ({ url }) => {
  const ref = useInView();
  return (
    <a href={url}>
      <motion.div
        className=" play_button position-relative d-flex justify-content-center align-items-center"
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <img src={button} alt="" className="w-100 position-relative" />
      </motion.div>
    </a>
  );
};
export default PlayButton;
