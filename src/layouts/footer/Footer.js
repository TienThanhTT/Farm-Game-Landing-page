import TopBackground from "../../components/footer/TopBackground";
import TitleBoard from "../../components/items/TitleBoard";
import FooterContent from "../../components/footer/FooterContent";
import Logo from "../../assets/navbar/logo.svg";

const title = "Tokenomics";

const FooterValue = [
  {
    title: "Tokenmetric",
    content: [
      {
        name: "Total Supply: ",
        value: "1,000,000 SFarm",
        isLine: true,
      },
      {
        name: "Total Supply: ",
        value: "1,000,000 SFarm",
        isLine: true,
      },
      {
        name: "FarmFi: ",
        value: "40%",
        isLine: true,
      },
      {
        name: "Marketing: ",
        value: "3%",
        isLine: true,
      },
      {
        name: "Marketing: ",
        value: "3%",
        isLine: false,
      },
    ],
  },
  {
    title: "",
    content: [
      {
        name: "Cex: ",
        value: "5%",
        isLine: true,
      },
      {
        name: "Presale: ",
        value: "45.4%",
        isLine: true,
      },
      {
        name: "Liquidity: ",
        value: "4.5%",
        isLine: false,
      },
    ],
  },
  {
    title: "Buy/Sell tax",
    content: [
      {
        name: "Slip buy: ",
        title: "0%",
        isLine: true,
      },
      {
        name: "Slip sell: ",
        title: "0%",
        isLine: false,
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="wrapper position-relative d-flex flex-column align-items-center justify-content-center">
        <TopBackground />
        <div className="footer_title">
          <TitleBoard content={title} />
        </div>

        <div className="col d-flex w-100 flex-column flex-sm-row justify-content-around py-sm-4 py-xxl-5 px-xxl-5">
          {FooterValue.map((item) => {
            return (
              <FooterContent
                title={item.title}
                content={item.content}
                key={item.title}
              />
            );
          })}
        </div>
        <div className=" d-flex justify-content-between align-items-center gap-2 gap-xxl-5 w-100 p-xxl-5">
          <div className="footer_form">
            <div>
              <span className="footer-form_title">Join Our Mailing List</span>
              <p className="footer-form_text">
                Be the first to hear all the lastest MiexsFarm Game news
              </p>
            </div>
            <div className=" d-flex gap-1 gap-sm-3 align-items-center ">
              <div class="w-50">
                <input
                  type="text"
                  className=" p-0 p-sm-2 p-xxl-3 w-100"
                  placeholder="Name"
                  aria-label="First name"
                />
              </div>
              <div class="w-50">
                <input
                  type="text"
                  class="p-0 p-sm-2 p-xxl-3 w-100"
                  placeholder="Email"
                  aria-label="Last name"
                />
              </div>
              <div className=" footer_button p-0 p-xxl-2 w-25">
                <button className="btn " value="Subscribe">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="footer_logo d-flex flex-column gap-xxl-4 align-items-center">
            <img src={Logo} alt="" className=" img-fluid w-75 h-auto" />
            <span className=" text-uppercase text-center">
              © 2024 BY MIEXS FARM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
