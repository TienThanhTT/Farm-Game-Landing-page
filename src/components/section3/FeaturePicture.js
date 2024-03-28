import TextTitle from "../items/TextTitle";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeDown } from "../../styles/animation/Animation";
const FeaturePicture = ({ src, text }) => {
  const ref = useInView();
  return (
    <motion.div
      className="section3_pic position-relative"
      ref={ref}
      variants={fadeDown}
      initial="hidden"
      whileInView="visible"
    >
      <img
        src={src}
        alt="feature_picture"
        className="pic_border border-white img-fluid w-100 h-auto"
      />
      <span className="position-absolute section3-pic_text text-uppercase w-50">
        <TextTitle content={text} isTitle={false} />
      </span>
    </motion.div>
  );
};
export default FeaturePicture;
