import GameItem from "./GameItem";
const GameListItem = ({ srcImg }) => {
  return (
    <div className="container-fluid d-flex justify-content-around flexnowrap gap-1 gap-sm-3 gap-md-4 gap-xxl-5">
      {srcImg.map((item) => {
        return <GameItem srcImg={item} key={item} />;
      })}
    </div>
  );
};
export default GameListItem;
