import TextTitle from "./TextTitle";
import woodBoard from "../../assets/components/wood_board.svg";
import CornRight from "../../assets/components/cornRight.svg";
import CornLeft from "../../assets/components/cornLeft.svg";

const TitleBoard = ({ content }) => {
  return (
    <div className=" title_board w-100">
      <div className="position-relative d-flex justify-content-center align-items-center">
        <img
          src={CornRight}
          alt="corn_right"
          className="position-absolute top-50 start-100 translate_right img-fluid h-auto w-50"
        />
        <img
          src={CornLeft}
          alt="corn_left"
          className="position-absolute top-50 start-0 translate_left img-fluid  h-auto w-50"
        />
        <img
          src={woodBoard}
          alt="woodBoard"
          className="position-relative img-fluid w-100 h-auto"
        />
        <div className=" position-absolute w-100 text-center text-uppercase">
          <TextTitle content={content} isTitle={true} />
        </div>
      </div>
    </div>
  );
};
export default TitleBoard;
