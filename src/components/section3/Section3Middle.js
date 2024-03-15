import PlayButton from "../items/PlayButton";
const Section3Middle = ({ content1, content2 }) => {
  return (
    <div className="section3-content_middle text-center d-flex align-items-center flex-column order-1">
      <div className=" p-sm-2 p-md-2 p-lg-5 section3_content">
        <p className="">{content1}</p>
        <p>{content2}</p>
      </div>

      <div className="d-flex justify-content-center section3_button">
        <PlayButton content="Play" />
      </div>
    </div>
  );
};
export default Section3Middle;
