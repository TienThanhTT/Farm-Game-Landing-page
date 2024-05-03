import CarouselItem from "./CarouselItem";
import { slideVariants } from "../../styles/animation/Animation";
import { motion } from "framer-motion";

const CarouselListItem = ({ item, direction, currentIndex }) => {
  return (
    <motion.div
      key={currentIndex}
      className="flex items-center justify-center h-[300px] lg:gap-4 px-4 lg:px-0"
      variants={slideVariants}
      initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
      animate="visible"
    >
      <CarouselItem item={item[currentIndex]} />
    </motion.div>
  );
};
export default CarouselListItem;
