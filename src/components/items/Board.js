import TitleBoard from "./TitleBoard";
import ContentBoard from "./ContentBoard";

const Board = ({ title, content, isLightBoard }) => {
  return (
    <div className="position-relative">
      <ContentBoard content={content} isLightBoard={isLightBoard} />
      <div
        className={
          isLightBoard
            ? "board-title_board position-absolute top-5 start-50 translate-middle"
            : "board-title_board position-absolute top-10  start-50 translate-middle"
        }
      >
        <TitleBoard content={title} />
      </div>
    </div>
  );
};
export default Board;
