import { useState } from "react";
import CarouselItem from "./CarouselItem";
import DarkContentImg from "../../assets/components/dark_ContentBoard.png";
import RightArrow from "../../assets/components/right_arrow.png";
import LeftArrow from "../../assets/components/left_arrow.png";
import TitleBoard from "../../components/items/TitleBoard";
import { slideVariants } from "../../styles/animation/Animation";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "../../styles/animation/Animation";

const CarouselListItem = ({ item, title }) => {
  const ref = useInView();
  const [direction, setDirection] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === item.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? item.length - 1 : prevIndex - 1
    );
  };
  //   const handleDotClick = (index) => {
  //     setCurrentIndex(index);
  //   };

  return (
    <div className="position-relative ">
      <img
        src={DarkContentImg}
        alt="ContentBoard"
        className=" img-fluid w-100 h-auto"
      />
      <motion.div
        className="position-absolute arrow start-0"
        onClick={handlePrevious}
        ref={ref}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
      >
        <img
          src={LeftArrow}
          alt="leftArrow"
          className=" img-fluid w-100 h-auto"
        />
      </motion.div>
      <motion.div
        className="position-absolute arrow end-0"
        onClick={handleNext}
        ref={ref}
        variants={fadeOut}
        initial="hidden"
        whileInView="visible"
      >
        <img
          src={RightArrow}
          alt="leftArrow"
          className=" img-fluid w-100 h-auto"
        />
      </motion.div>
      <div className="d-none d-lg-block position-absolute top-10 start-50 translate-middle">
        <TitleBoard content={title} />
      </div>
      <div className="section5-img_slideShow position-absolute text-center w-75 pt-lg-4 d-flex justify-content-center">
        <motion.div
          key={currentIndex}
          className="w-50"
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
        >
          <CarouselItem item={item[currentIndex]} />
        </motion.div>
      </div>
    </div>
  );
};
export default CarouselListItem;
