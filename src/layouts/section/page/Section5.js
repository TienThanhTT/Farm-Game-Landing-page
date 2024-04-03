import CarouselListItem from "../../../components/section5/CarouselListItem";
import GameListItem from "../../../components/section5/GameListItem";
import TitleBoard from "../../../components/items/TitleBoard";

import item1 from "../../../assets/section/section5/item1.png";
import item2 from "../../../assets/section/section5/item2.png";
import item3 from "../../../assets/section/section5/item3.png";
import item4 from "../../../assets/section/section5/item4.png";
import item5 from "../../../assets/section/section5/item5.png";
import item6 from "../../../assets/section/section5/item6.png";

const ListImg = [item1, item2, item3, item4, item5, item6];

const title = "NFT ITEM";

const Section5 = () => {
  return (
    <section
      className="wrapper section5 d-flex justify-content-center align-items-center"
      id="NFT_ITEM"
    >
      <div className=" row justify-content-center m-0">
        <div className="col-7 col-sm-4 d-lg-none">
          <TitleBoard content={title} />
        </div>
        <div className=" col-10 col-xl-7">
          <CarouselListItem item={ListImg} title={title} />
        </div>
        <div className="col-12 col-xl-7">
          <GameListItem srcImg={ListImg} />
        </div>
      </div>
    </section>
  );
};
export default Section5;
