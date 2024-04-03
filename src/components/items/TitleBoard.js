import TextTitle from "./TextTitle";
import woodBoard from "../../assets/components/wood_board.png";
import CornRight from "../../assets/components/cornRight.png";
import CornLeft from "../../assets/components/cornLeft.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeDown } from "../../styles/animation/Animation";

const TitleBoard = ({ content }) => {
  const ref = useInView();
  return (
    <motion.div
      className="w-100"
      ref={ref}
      variants={fadeDown}
      initial="hidden"
      whileInView="visible"
    >
      <div className="position-relative d-flex justify-content-center align-items-center">
        <img
          src={CornRight}
          alt="corn_right"
          className="position-absolute top-50 start-100 translate_right img-fluid h-auto w-50"
        />
        <img
          src={CornLeft}
          alt="corn_left"
          className="position-absolute top-50 start-0 translate_left img-fluid  h-auto w-50"
        />
        <img
          src={woodBoard}
          alt="woodBoard"
          className="position-relative img-fluid w-100 h-auto"
        />
        <div className=" position-absolute w-100 text-center text-uppercase">
          <TextTitle content={content} isTitle={true} />
        </div>
      </div>
    </motion.div>
  );
};
export default TitleBoard;
