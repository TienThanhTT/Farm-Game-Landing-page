import TitleBoard from "./TitleBoard";
import ContentBoard from "./ContentBoard";

const Board = ({ title, content }) => {
  return (
    <div className="position-relative w-100">
      <ContentBoard content={content} />
      <div className=" col-8 col-md-5 col-xl-3 position-absolute top-5 start-50 translate-middle  ">
        <TitleBoard content={title} />
      </div>
    </div>
  );
};
export default Board;
