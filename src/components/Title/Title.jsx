import "./Title.css";

const Title = ({ isTitle = true, mainTitle = false, children }) => {
  return mainTitle ? (
    <h1 className="main__title">{children}</h1>
  ) : isTitle ? (
    <h2 className="title">{children}</h2>
  ) : (
    <h3 className="subtitle">{children}</h3>
  );
};

export default Title;
