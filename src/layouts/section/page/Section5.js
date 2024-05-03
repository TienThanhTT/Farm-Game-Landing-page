import CarouselListItem from "../../../components/section5/CarouselListItem";
import GameListItem from "../../../components/section5/GameListItem";

import item1 from "../../../assets/section/section5/item1.png";
import item2 from "../../../assets/section/section5/item2.png";
import item3 from "../../../assets/section/section5/item3.png";
import item4 from "../../../assets/section/section5/item4.png";
import item5 from "../../../assets/section/section5/item5.png";
import item6 from "../../../assets/section/section5/item6.png";
import previous from "../../../assets/section/section5/previous_icon.png";
import next from "../../../assets/section/section5/next_icon.png";
import Title from "../../../components/title";
import { useState } from "react";

const ListImg = [item1, item2, item3, item4, item5, item6];

const title = "NFT ITEM";

const Section5 = () => {
  const [direction, setDirection] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === ListImg.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? ListImg.length - 1 : prevIndex - 1
    );
  };
  return (
    <section
      className=" bg-section5 h-[1180px] flex flex-col justify-center pt-16"
      id="NFT_ITEM"
    >
      <div className=" flex flex-col gap-4 lg:gap-16">
        <div className=" flex justify-center items-center">
          <Title title={"NFT Items"} />
        </div>
        <div className=" flex items-center justify-center px-4 lg:px-0">
          <div className="lg:hidden" onClick={handlePrevious}>
            <img src={previous} alt="" />
          </div>
          <CarouselListItem
            item={ListImg}
            direction={direction}
            currentIndex={currentIndex}
          />
          <div className="lg:hidden" onClick={handleNext}>
            <img src={next} alt="" />
          </div>
        </div>
        <div className=" flex gap-6 items-center justify-center">
          <div className="hidden lg:block" onClick={handlePrevious}>
            <img src={previous} alt="" />
          </div>
          <GameListItem
            srcImg={ListImg}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
          <div className="hidden lg:block" onClick={handleNext}>
            <img src={next} alt="" />
          </div>
        </div>
      </div>
      <div className=" bg-section5_bottom_background bg-center bg-cover h-[462px] w-full "></div>
    </section>
  );
};
export default Section5;
