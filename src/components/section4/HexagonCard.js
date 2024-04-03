import HexagonBoard from "../../assets/section/section4/hexagon_board.png";
import TextTitle from "../items/TextTitle";
import Leaf from "../../assets/section/section4/leaf.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HexagonCard = ({ isLeaf, title, content, variants }) => {
  const ref = useInView();

  return (
    <motion.div
      className=" position-relative d-flex justify-content-center"
      ref={ref}
      variants={variants}
      initial="hidden"
      whileInView="visible"
    >
      <img
        src={HexagonBoard}
        alt="hexaBoard"
        className=" img-fluid w-100 h-auto"
      />
      <div className="text-center card_title position-absolute start-50 translate-middle text-uppercase">
        <TextTitle content={title} />
      </div>
      {isLeaf ? (
        <div className=" position-absolute card_leaf translate-middle">
          <img src={Leaf} alt="Leaf" className="w-100" />
        </div>
      ) : (
        <></>
      )}

      <div className="position-absolute card_content w-75 pt-3">
        <div className="card_text ">
          {content.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default HexagonCard;
