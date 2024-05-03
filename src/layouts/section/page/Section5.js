import CarouselListItem from "../../../components/section5/CarouselListItem";
import GameListItem from "../../../components/section5/GameListItem";

import cacao from "../../../assets/section/section5/cacao3.png";
import carrot from "../../../assets/section/section5/carrot3.png";
import coffee from "../../../assets/section/section5/coffee3.png";
import corn from "../../../assets/section/section5/corn3.png";
import cotton from "../../../assets/section/section5/cotton3.png";
import jasmine from "../../../assets/section/section5/jasmine3.png";
import peanut from "../../../assets/section/section5/peanutplant3.png";
import pepper from "../../../assets/section/section5/pepper3.png";
import pinetree from "../../../assets/section/section5/pinetree3.png";
import potato from "../../../assets/section/section5/potato3.png";
import rice from "../../../assets/section/section5/rice3.png";
import rose from "../../../assets/section/section5/rose3.png";
import rubbertree from "../../../assets/section/section5/rubbertree3.png";
import silk from "../../../assets/section/section5/silk3.png";
import strawberry from "../../../assets/section/section5/strawberry3.png";
import sugarcane from "../../../assets/section/section5/sugarcane3.png";
import teaplant from "../../../assets/section/section5/teaplant3.png";
import tomato from "../../../assets/section/section5/tomato3.png";
import wheat from "../../../assets/section/section5/wheat3.png";

import previous from "../../../assets/section/section5/previous_icon.png";
import next from "../../../assets/section/section5/next_icon.png";
import Title from "../../../components/title";
import { useState } from "react";

const Item = [
  cacao,
  carrot,
  coffee,
  corn,
  cotton,
  jasmine,
  peanut,
  pepper,
  pinetree,
  potato,
  rice,
  rose,
  rubbertree,
  silk,
  strawberry,
  sugarcane,
  teaplant,
  tomato,
  wheat,
];

const Section5 = () => {
  const [direction, setDirection] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === Item.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Item.length - 1 : prevIndex - 1
    );
  };
  return (
    <section
      className=" bg-section5 lg:h-[1180px] flex flex-col justify-center pt-16"
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
            item={Item}
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
            srcImg={Item}
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
