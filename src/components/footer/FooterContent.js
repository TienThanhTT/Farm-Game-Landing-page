import Line from "../items/Line";
const FooterContent = ({ title, content, isLine }) => {
  return (
    <div className=" d-flex flex-column col-xxl-3">
      <span className=" text-uppercase footerContent_title text-center p-4 p-xxl-5">
        {title}
      </span>
      {content.map((item) => {
        return (
          <>
            {(isLine = item.isLine)}
            {isLine ? (
              <p key={item.name}>
                {item.name}
                <span className="font-weight-normal">{item.value}</span>

                <Line />
              </p>
            ) : (
              <p key={item.name}>
                {item.name}
                <span className="font-weight-normal">{item.value}</span>
              </p>
            )}
          </>
        );
      })}
    </div>
  );
};
export default FooterContent;
