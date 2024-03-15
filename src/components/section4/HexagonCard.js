import HexagonBoard from "../../assets/section/section4/hexagon_board.svg";
import TextTitle from "../items/TextTitle";
import Leaf from "../../assets/section/section4/leaf.svg";

const HexagonCard = ({ isLeaf, title, content }) => {
  return (
    <div className=" position-relative d-flex justify-content-center">
      <img
        src={HexagonBoard}
        alt="hexaBoard"
        className=" img-fluid w-100 h-auto"
      />
      <div className="text-center card_title position-absolute start-50 translate-middle text-uppercase">
        <TextTitle content={title} />
      </div>
      {isLeaf ? (
        <div className=" position-absolute card_leaf translate-middle">
          <img src={Leaf} alt="Leaf" />
        </div>
      ) : (
        <></>
      )}

      <div className="position-absolute card_content w-75 pt-3">
        <div className="card_text ">
          {content.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
export default HexagonCard;
