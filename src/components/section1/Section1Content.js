import Logo from "../../assets/section/section1/section1-logo.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { appear } from "../../styles/animation/Animation";

const Section1Content = () => {
  const ref = useInView();
  return (
    <motion.div
      className="d-flex flex-column align-items-center w-25"
      ref={ref}
      variants={appear}
      initial="hidden"
      whileInView="visible"
    >
      <span className="section1_text">Welcome to</span>
      <img src={Logo} alt="section1_logo" className="w-100" />
    </motion.div>
  );
};
export default Section1Content;
