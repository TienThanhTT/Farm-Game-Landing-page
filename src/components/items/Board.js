import TitleBoard from "./TitleBoard";
import ContentBoard from "./ContentBoard";

const Board = ({ title, content }) => {
  return (
    <div className="position-relative w-100">
      <ContentBoard content={content} />
      <div className="board-title_board position-absolute top-5 start-50 translate-middle  ">
        <TitleBoard content={title} />
      </div>
    </div>
  );
};
export default Board;
