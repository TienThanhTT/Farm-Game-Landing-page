import ContentImg from "../../assets/components/ContentBoard.png";

const ContentBoard = ({ content }) => {
  return (
    <div className="position-relative d-flex justify-content-center align-items-center">
      <img
        src={ContentImg}
        alt="ContentBoard"
        className="d-none d-lg-block img-fluid h-auto"
      />

      <div className="board_content  text-center w-75 pt-lg-4 d-flex justify-content-center">
        <p className="board-content_text w-100">{content}</p>
      </div>
    </div>
  );
};
export default ContentBoard;
