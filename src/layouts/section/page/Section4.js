import TitleBoard from "../../../components/items/TitleBoard";
import HexagonCard from "../../../components/section4/HexagonCard";
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
    <section className="section4" id="Roadmap">
      <div className="wrapper container d-flex flex-column align-items-center justify-content-center gap-5">
        <div className=" col-8 col-md-5 col-xl-3">
          <TitleBoard content="Roadmap" />
        </div>
        <div className="d-flex justify-content-center justify-content-xxl-between flex-wrap gap-3">
          {CardTitle.map((item) => {
            return (
              <div className="section4_card" key={item.title}>
                <HexagonCard
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
