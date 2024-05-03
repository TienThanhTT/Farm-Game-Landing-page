import Card from "../../../components/section4/Card";
import Title from "../../../components/title";
import { fadeDown, fadeUp } from "../../../styles/animation/Animation";
const Section4 = () => {
  const CardTitle = [
    {
      title: "Phase 1",
      isLeaf: true,
      CardValue: [
        "Game ideas and economic development",
        "Develop game UI and website",
        "Launch social accounts",
        "Check game and server security",
      ],
      variant: fadeDown,
    },
    {
      title: "Phase 2",
      isLeaf: false,
      CardValue: [
        "Build the game environment",
        "In-game building",
        "Release internal beta test",
        "Initiate marketing plan",
        "Start presale",
      ],
      variant: fadeUp,
    },
    {
      title: "Phase 3",
      isLeaf: true,
      CardValue: [
        "Launch giveaway campaign",
        "List token on Raydium",
        "Attain Top 1 on Solana Trending",
        "Update socials on Dexscreener and Dextools",
        "Launch the game",
        "List on CMC and CG",
      ],
      variant: fadeDown,
    },
    {
      title: "Phase 4",
      isLeaf: false,
      CardValue: [
        "Collect player feedback",
        "Offer NFT discounts",
        "Conduct top server giveaway",
        "Update Anti-inflation measures",
        "Hold user competitions and giveaways",
      ],
      variant: fadeUp,
    },
    {
      title: "Phase 5",
      isLeaf: true,
      CardValue: [
        "Grow the community",
        "Host giveaways and contests",
        "Collaborate with influencers and partners",
        "Implement a YouTube marketing campaign",
      ],
      variant: fadeDown,
    },
    {
      title: "Phase 6",
      isLeaf: false,
      CardValue: [
        "Continue game development",
        "List on CEX",
        "Implement multi-chain bridge",
        "Update the roadmap",
      ],
      variant: fadeUp,
    },
  ];

  return (
    <section
      className=" bg-section4 bg-center bg-cover py-8 lg:py-0 lg:h-[1260px] flex items-center justify-center"
      id="Roadmap"
    >
      <div className="container flex flex-col gap-12 ">
        <div className=" flex justify-center items-center">
          <Title title={"Road map"} />
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
          {CardTitle.map((item) => {
            return (
              <div className=" col-span-4 max-w-[340px]" key={item.title}>
                <Card
                  isLeaf={item.isLeaf}
                  title={item.title}
                  content={item.CardValue}
                  key={item.title}
                  variants={item.variant}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Section4;
