import Background from "../../../assets/section/section2/section2_background.svg";
import Board from "../../../components/items/Board";

const Section2 = () => {
  return (
    <section className="section2 position-relative d-flex justify-content-center wrapper align-items-center">
      <div className="position-absolute bottom-0 start-50 translate-middle-x container-fluid p-0">
        <img src={Background} alt="section2_background" className="w-100" />
      </div>
      <Board
        title="About us"
        isLightBoard={true}
        content="Welcome to the digital farm game on the SOLFARM, where every blade of
        grass sprouting becomes an exciting money-making opportunity. With
        SOLFARM, you can mine coins, expand your farm, and create unique NFTs
        with each success. Join now to explore the vibrant world of
        Play-to-Earn, where creativity and earning money blend seamlessly. Make
        sure you're ready to elevate your farm to new heights on the SOL
        platform! CA: BjBzvw6VX7UJtrC7BaYLG1dHBiwrXP1T9j2YfDEdP4zU"
      ></Board>
    </section>
  );
};
export default Section2;
