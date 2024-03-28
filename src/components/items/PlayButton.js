import TextTitle from "./TextTitle";
import img from "../../assets/components/bg_button.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeUp } from "../../styles/animation/Animation";

const PlayButton = ({ content }) => {
  const ref = useInView();
  return (
    <motion.div
      className=" w-75 position-relative d-flex justify-content-center align-items-center"
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
    >
      <img src={img} alt="" className="w-100 position-relative" />
      <div className="position-absolute playbutton_content translate_middle">
        <TextTitle content={content} isTitle={false}></TextTitle>
      </div>
    </motion.div>
  );
};
export default PlayButton;
