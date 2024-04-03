import TitleBoard from "../../../components/items/TitleBoard";
import Section3Middle from "../../../components/section3/Section3Middle";
import FeaturePicture from "../../../components/section3/FeaturePicture";
import TheFarm from "../../../assets/section/section3/feature_pic1.png";
import StoreHouse from "../../../assets/section/section3/feature_pic2.png";
import ReferralSytem from "../../../assets/section/section3/feature_pic3.png";
import SeedShop from "../../../assets/section/section3/feature_pic4.png";
import MoneyTree from "../../../assets/section/section3/feature_pic5.png";
import AddFriend from "../../../assets/section/section3/feature_pic6.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeUp } from "../../../styles/animation/Animation";

const Section3 = () => {
  const ref = useInView();

  const LeftValue = [
    {
      src: TheFarm,
      text: "The Farm",
    },
    {
      src: StoreHouse,
      text: "Store House",
    },
    {
      src: ReferralSytem,
      text: "Referral Sytem",
    },
  ];

  const RightValue = [
    {
      src: SeedShop,
      text: "Seed Shop",
    },
    {
      src: MoneyTree,
      text: "Money Tree",
    },
    {
      src: AddFriend,
      text: "Add Friend",
    },
  ];

  return (
    <motion.section
      className=" section3"
      id="WhitePaper"
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
    >
      <div className="container">
        <div className=" d-flex flex-column align-items-center justify-content-center gap-5 wrapper">
          <div className=" col-7 col-md-5 col-xl-3 d-flex justify-content-center">
            <TitleBoard content="Feature" />
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="section3_content col-8 col-xl-4 justify-content-around d-block d-xl-none">
              <Section3Middle
                content1="Experience a journey where every action is not just about managing a farm, 
              but also an exciting opportunity to earn money. Particularly, the combination of features such as The Farm, 
              Money Tree, Seed Shop, Store House, and Referral System brings a unique and multi-dimensional gaming 
              experience. "
                content2="And don't miss out on upcoming features like Visit Friend's Farm, Live Stock, Add Friend, 
              Farm Expansion, and Piggy Bank, promising to enrich your farming adventure. Get ready to explore our world 
              and start your Play-to-Earn journey today!"
                className="order-1"
              />
            </div>
            <div className="col-8 col-xl-4 py-4 d-flex gap-4 flex-column">
              {LeftValue.map((item) => {
                return (
                  <FeaturePicture
                    key={item.src}
                    src={item.src}
                    text={item.text}
                  />
                );
              })}
            </div>

            <div className="section3_content col-8 col-xl-4 justify-content-around d-none d-xl-block">
              <Section3Middle
                content1="Experience a journey where every action is not just about managing a farm, 
              but also an exciting opportunity to earn money. Particularly, the combination of features such as The Farm, 
              Money Tree, Seed Shop, Store House, and Referral System brings a unique and multi-dimensional gaming 
              experience. "
                content2="And don't miss out on upcoming features like Visit Friend's Farm, Live Stock, Add Friend, 
              Farm Expansion, and Piggy Bank, promising to enrich your farming adventure. Get ready to explore our world 
              and start your Play-to-Earn journey today!"
                className="order-1"
              />
            </div>

            <div className="section3-content_right col-8 col-xl-4 py-4 d-flex gap-4 flex-column">
              {RightValue.map((item) => {
                return (
                  <FeaturePicture
                    key={item.src}
                    src={item.src}
                    text={item.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Section3;
