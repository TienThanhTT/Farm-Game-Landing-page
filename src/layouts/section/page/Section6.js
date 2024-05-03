import { useState } from "react";
import Title from "../../../components/title";

const Layout = [
  {
    title: "Tokenmetric",
    content: [
      {
        name: "Total Supply: ",
        value: "1,000,000 BMH",
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
        name: "Team: ",
        value: "2%",
        isLine: false,
      },
    ],
  },
  {
    title: <br />,
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
        value: "0%",
        isLine: true,
      },
      {
        name: "Slip sell: ",
        value: "0%",
        isLine: false,
      },
    ],
  },
];

const Section6 = () => {
  return (
    <section className=" bg-section6 bg-center bg-cover lg:h-[750px] flex flex-col ">
      <div className="container flex flex-col justify-start items-center ">
        <div className=" -translate-y-12">
          <Title title={"Tokenomics"} />
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 w-full gap-12">
          {Layout.map((value, index) => {
            return (
              <div
                className=" col-span-4 text-white flex flex-col gap-12"
                key={index}
              >
                <span className="flex uppercase text-center text-[26px] font-normal">
                  {value.title}
                </span>
                <div className="flex flex-col gap-4">
                  {value.content.map((item, index) => {
                    return (
                      <div key={index} className=" ">
                        <p
                          className={
                            item.isLine
                              ? " text-[22px] font-light border-b-2 border-white pb-4"
                              : "text-[22px] font-light"
                          }
                        >
                          {item.name}
                          <span className="ftext-[22px] font-normal">
                            {item.value}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" bg-section6_bottom_background bg-cover bg-center w-full h-[252px] relative top-[100px] lg:top-[170px] "></div>
    </section>
  );
};
export default Section6;
