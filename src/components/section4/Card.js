import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ title, content, variants }) => {
  const ref = useInView();

  return (
    <motion.div
      className="relative bg-card_background w-[340px] h-[430px] "
      ref={ref}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ type: "spring", stiffness: 200 }}
    >
      <p className="absolute top-20 left-1/2 -translate-x-10 font-outline-green text-[32px] leading-[40px] font-bold text-white drop-shadow-[0px_4px_2px_0px_rgba(0,0,0,0.3)] ">
        {title}
      </p>

      <div className="absolute top-[30%] left-14 text-base font-normal text-white flex flex-col gap-4 mt-6">
        {content.map((item) => {
          return (
            <p key={item} className=" max-w-[260px]">
              {item}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};
export default Card;
