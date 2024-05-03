import Button_img from "../../../assets/components/play_button.png";
import TheFarm from "../../../assets/section/section3/feature_pic1.png";
import StoreHouse from "../../../assets/section/section3/feature_pic2.png";
import ReferralSytem from "../../../assets/section/section3/feature_pic3.png";
import SeedShop from "../../../assets/section/section3/feature_pic4.png";
import MoneyTree from "../../../assets/section/section3/feature_pic5.png";
import AddFriend from "../../../assets/section/section3/feature_pic6.png";
import Title from "../../../components/title";
import Feature from "../../../components/section3/Feature";

const Section3 = () => {
  const LeftValue = [
    {
      src: TheFarm,
      title: "The Farm",
      comming: false,
    },
    {
      src: StoreHouse,
      title: "Store House",
      comming: false,
    },
    {
      src: ReferralSytem,
      title: "Referral Sytem",
      comming: true,
    },
  ];

  const RightValue = [
    {
      src: SeedShop,
      title: "Seed Shop",
      comming: false,
    },
    {
      src: MoneyTree,
      title: "Money Tree",
      comming: true,
    },
    {
      src: AddFriend,
      title: "Add Friend",
      comming: true,
    },
  ];

  return (
    <section
      className=" bg-section3 bg-cover bg-center py-8 lg:h-[1107px] lg:py-0 "
      id="WhitePaper"
    >
      <div className="container flex h-full items-center">
        <div className=" flex flex-col gap-12">
          <div className=" flex justify-center items-center">
            <Title title={"Features"} />
          </div>

          <div className=" grid grid-cols-4  md:grid-cols-8 lg:grid-cols-12 gap-8">
            <div className=" lg:hidden col-span-4 md:col-span-8 bg-black bg-opacity-80 text-white flex flex-col justify-center items-center gap-12 py-16">
              <p className=" text-lg text-center leading-[28px] lg:max-w-[320px] m-auto ">
                Experience a journey where every action is not just about
                managing a farm, but also an exciting opportunity to earn money.
                Particularly, the combination of features such as The Farm,
                Money Tree, Seed Shop, Store House, and Referral System brings a
                unique and multi-dimensional gaming experience.
                <br /> <br /> And don't miss out on upcoming features like Visit
                Friend's Farm, Live Stock, Add Friend, Farm Expansion, and Piggy
                Bank, promising to enrich your farming adventure. Get ready to
                explore our world and start your Play-to-Earn journey today!
              </p>
              <div className="flex justify-center items-center">
                <img src={Button_img} alt="" />
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-8 justify-center">
              {LeftValue.map((item) => {
                return (
                  <Feature
                    key={item.src}
                    img={item.src}
                    comming={item.comming}
                    title={item.title}
                  />
                );
              })}
            </div>
            <div className=" hidden lg:flex lg:col-span-4 bg-black bg-opacity-80 text-white flex-col justify-center items-center gap-12 py-16">
              <p className=" text-lg text-center leading-[28px] lg:max-w-[320px] m-auto ">
                Experience a journey where every action is not just about
                managing a farm, but also an exciting opportunity to earn money.
                Particularly, the combination of features such as The Farm,
                Money Tree, Seed Shop, Store House, and Referral System brings a
                unique and multi-dimensional gaming experience.
                <br /> <br /> And don't miss out on upcoming features like Visit
                Friend's Farm, Live Stock, Add Friend, Farm Expansion, and Piggy
                Bank, promising to enrich your farming adventure. Get ready to
                explore our world and start your Play-to-Earn journey today!
              </p>
              <div className="flex justify-center items-center">
                <img src={Button_img} alt="" />
              </div>
            </div>

            <div className=" col-span-4 flex flex-col gap-8 justify-center">
              {RightValue.map((item) => {
                return (
                  <Feature
                    key={item.src}
                    img={item.src}
                    comming={item.comming}
                    title={item.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3;
