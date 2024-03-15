import TextTitle from "../items/TextTitle";
const FeaturePicture = ({ src, text }) => {
  return (
    <div className="section3_pic position-relative">
      <img
        src={src}
        alt="feature_picture"
        className="pic_border border-white img-fluid w-100 h-auto"
      />
      <span className="position-absolute section3-pic_text text-uppercase w-50">
        <TextTitle content={text} isTitle={false} />
      </span>
    </div>
  );
};
export default FeaturePicture;
