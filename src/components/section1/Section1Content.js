import Logo from "../../assets/section/section1/section1-logo.svg";

const Section1Content = () => {
  return (
    <div className="d-flex flex-column align-items-center w-25">
      <span className="section1_text">Welcome to</span>
      <img src={Logo} alt="section1_logo" className="w-100" />
    </div>
  );
};
export default Section1Content;
