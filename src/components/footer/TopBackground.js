import Img from "../../assets/footer/footer_top-bg.svg";
const TopBackground = () => {
  return (
    <div className=" container-fluid position-absolute top-0 start-0">
      <img src={Img} alt="" className=" img-fluid w-100 h-auto" />
    </div>
  );
};
export default TopBackground;
