import TextTitle from "./TextTitle";
import img from "../../assets/components/bg_button.svg";
const PlayButton = ({ content }) => {
  return (
    <div className=" w-75 position-relative d-flex justify-content-center align-items-center">
      <img src={img} alt="" className="w-100 position-relative" />
      <div className="position-absolute playbutton_content translate_middle">
        <TextTitle content={content} isTitle={false}></TextTitle>
      </div>
    </div>
  );
};
export default PlayButton;
