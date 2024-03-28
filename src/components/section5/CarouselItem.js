const CarouselItem = ({ item }) => {
  return (
    <div className=" d-flex flex-wrap w-100 justify-content-center">
      <img alt="" src={item} className="img-fluid w-50" />
      <img alt="" src={item} className="img-fluid w-50" />
      <img alt="" src={item} className="img-fluid w-50" />
    </div>
  );
};
export default CarouselItem;
