import CarouselItem from "./CarouselItem";
import previous from "../../assets/section/section5/previous_icon.png";
import next from "../../assets/section/section5/next_icon.png";
import { slideVariants } from "../../styles/animation/Animation";
import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "../../styles/animation/Animation";

const CarouselListItem = ({ item, direction, currentIndex }) => {
  return (
    <motion.div
      key={currentIndex}
      className="flex items-center justify-center h-[300px] lg:gap-4 px-4 lg:px-0"
      variants={slideVariants}
      initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
      animate="visible"
      exit="exit"
    >
      <CarouselItem item={item[currentIndex]} />
    </motion.div>
  );
};
export default CarouselListItem;
