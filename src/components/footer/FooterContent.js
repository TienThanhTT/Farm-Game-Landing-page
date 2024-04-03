import Line from "../items/Line";
const FooterContent = ({ title, content, isLine, footerkey }) => {
  return (
    <div className=" d-flex flex-column col-md-3" key={footerkey}>
      <span className=" text-uppercase text-center pb-3">{title}</span>
      {content.map((item, index) => {
        return (
          <div key={index}>
            {(isLine = item.isLine)}
            {isLine ? (
              <div className="mb-3">
                {item.name}
                <span className="font-weight-normal">{item.value}</span>

                <Line />
              </div>
            ) : (
              <div className="mb-3" key={index}>
                {item.name}
                <span className="font-weight-normal">{item.value}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FooterContent;
