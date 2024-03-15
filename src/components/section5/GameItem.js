const GameItem = ({ srcImg }) => {
  return (
    <div className="game_item p-0 p-md-2 border border- border-5 border-opacity-10 ">
      <img src={srcImg} alt="" className=" img-fluid w-100 h-auto" />
    </div>
  );
};
export default GameItem;
