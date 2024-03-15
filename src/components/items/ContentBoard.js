import ContentImg from "../../assets/components/ContentBoard.svg";
import DarkContentImg from "../../assets/components/dark_ContentBoard.svg";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";

const ContentBoard = ({ content, isLightBoard }) => {
  return (
    <div className="position-relative d-flex justify-content-center align-items-center">
      {isLightBoard ? (
        <img
          src={ContentImg}
          alt="ContentBoard"
          className=" img-fluid w-100 h-auto"
        />
      ) : (
        <div className=" position-relative ">
          <img
            src={DarkContentImg}
            alt="ContentBoard"
            className=" img-fluid w-100 h-auto"
          />
          <div className="position-absolute arrow start-0">
            <LeftArrow />
          </div>
          <div className="position-absolute arrow end-0">
            <RightArrow />
          </div>
        </div>
      )}

      <div className=" position-absolute  text-white board-content_text text-center">
        {content}
      </div>
    </div>
  );
};
export default ContentBoard;
