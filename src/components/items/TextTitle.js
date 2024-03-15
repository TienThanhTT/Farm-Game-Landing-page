const TextTitle = ({ content, isTitle }) => {
  return (
    <div className={isTitle ? "effect title " : "effect content "}>
      {content}
    </div>
  );
};
export default TextTitle;
