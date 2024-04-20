import { useState } from "react";
import "./Letter.css";
import Title from "../Title/Title";

const Letter = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="letter">
      <div className="letter__title" onClick={toggleExpansion}>
        <Title isTitle={false}>KLIKNIJ</Title>
      </div>
      {isExpanded && <div className="letter__content">{children}</div>}
    </div>
  );
};

export default Letter;
