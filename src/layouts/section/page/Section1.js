import Img from "../../../assets/section/section1/Miexs_img.png";
import "../../../styles/components/layout/section/section1.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { appear } from "../../../styles/animation/Animation";

const Section1 = () => {
  const ref = useInView();
  return (
    <section className="section1 d-flex align-items-center" id="topPage">
      <div className="container">
        <motion.div
          className=" wrapper d-flex flex-column justify-content-center align-items-center row"
          ref={ref}
          variants={appear}
          initial="hidden"
          whileInView="visible"
        >
          <div className=" col-7 col-sm-4 col-lg-12 d-flex flex-column align-items-center">
            <div className="section1_text text-center">Welcome to</div>
            <img alt="" src={Img} className=" img-fluid" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Section1;
