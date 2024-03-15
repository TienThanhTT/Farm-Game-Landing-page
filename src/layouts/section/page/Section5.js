import Board from "../../../components/items/Board";
import Section5Corn from "../../../components/section5/Section5Corn";
import GameListItem from "../../../components/section5/GameListItem";

import item1 from "../../../assets/section/section5/item1.svg";
import item2 from "../../../assets/section/section5/item2.svg";
import item3 from "../../../assets/section/section5/item3.svg";
import item4 from "../../../assets/section/section5/item4.svg";
import item5 from "../../../assets/section/section5/item5.svg";
import item6 from "../../../assets/section/section5/item6.svg";

const ListImg = [item1, item2, item3, item4, item5, item6];

const title = "NFT ITEM";
const content = <Section5Corn />;

const Section5 = () => {
  return (
    <section className="wrapper section5 w-100 d-flex justify-content-center align-items-center">
      <div className="wrapper d-flex flex-column align-items-center">
        <div className="w-100">
          <Board
            title={title}
            content={content}
            isArrow={true}
            isLightBoard={false}
          />
        </div>
        <div className="">
          <GameListItem srcImg={ListImg} />
        </div>
      </div>
    </section>
  );
};
export default Section5;
