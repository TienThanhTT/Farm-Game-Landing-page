import GameItem from "./GameItem";

const GameListItem = ({ srcImg }) => {
  return (
    <div className="flex gap-8 w-[950px] max-w-[85%] justify-center items-center ">
      <div className="flex gap-8 w-full overflow-x-scroll overflow-hidden pb-2">
        {srcImg.map((item) => {
          return <GameItem srcImg={item} key={item} />;
        })}
      </div>
    </div>
  );
};
export default GameListItem;
