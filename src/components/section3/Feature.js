import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeDown } from "../../styles/animation/Animation";

const Feature = ({ img, title, comming }) => {
  const ref = useInView();
  return (
    <motion.div
      className=" relative text-white uppercase max-w-[380px]"
      ref={ref}
      variants={fadeDown}
      initial="hidden"
      whileInView="visible"
      transition={{ type: "spring", stiffness: 200 }}
    >
      <img
        src={img}
        alt="feature_picture"
        className="border-[14px] border-white"
      />

      <p
        className={
          comming
            ? " absolute top-8 right-6 font-outline text-2xl font-bold text-white"
            : " absolute bottom-8 right-6 font-outline text-2xl font-bold text-white "
        }
      >
        {title}{" "}
      </p>
      {comming ? (
        <p className=" absolute bottom-8 right-6 font-outline text-base font-bold text-white">
          comming soon
        </p>
      ) : (
        <></>
      )}
    </motion.div>
  );
};
export default Feature;
