import GameItem from "./GameItem";
const GameListItem = ({ srcImg }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {srcImg.map((item) => {
        return <GameItem srcImg={item} key={item} />;
      })}
    </div>
  );
};
export default GameListItem;
