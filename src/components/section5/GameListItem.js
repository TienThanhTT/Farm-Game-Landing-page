import GameItem from "./GameItem";
const GameListItem = ({ srcImg }) => {
  return (
    <div className="container-fluid d-flex justify-content-around flex-wrap flex-md-nowrap gap-2 gap-md-5">
      {srcImg.map((item) => {
        return <GameItem srcImg={item} key={item} />;
      })}
    </div>
  );
};
export default GameListItem;
