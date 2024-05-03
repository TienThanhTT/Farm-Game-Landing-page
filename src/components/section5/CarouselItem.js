const CarouselItem = ({ item }) => {
  return (
    <>
      <div className=" flex flex-wrap max-w-[359px] items-center justify-center">
        <img alt="" src={item} className="w-[158px] hidden md:block" />
        <img alt="" src={item} className="w-[158px]" />
        <img alt="" src={item} className="w-[158px]" />
      </div>
    </>
  );
};
export default CarouselItem;
