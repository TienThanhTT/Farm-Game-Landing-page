import TitleBoard from "../../../components/items/TitleBoard";
import HexagonCard from "../../../components/section4/HexagonCard";
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
    },
  ];

  return (
    <section className="wrapper section4 d-flex flex-column align-items-center justify-content-center">
      <div className="w-25">
        <TitleBoard content="Roadmap" />
      </div>
      <div className="section4_card d-flex  flex-wrap justify-content-center align-items-center">
        {CardTitle.map((item) => {
          return (
            <HexagonCard
              isLeaf={item.isLeaf}
              title={item.title}
              content={item.CardValue}
              key={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Section4;
