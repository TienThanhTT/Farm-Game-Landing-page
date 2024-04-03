import Img from "../../assets/footer/footer_top-bg.png";
const TopBackground = () => {
  return (
    <div className=" d-none d-xl-block position-absolute top-0 start-0 w-100">
      <img src={Img} alt="" className=" img-fluid w-100 h-auto" />
    </div>
  );
};
export default TopBackground;
