import React, { useState } from "react";
import "./Word.css";

const Word = ({ text, index, actions }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={"word " + (selected? "selected" : "")}>
      <span key={index} onClick={() => setSelected(!selected)}>
        {text + " "}
      </span>
    </div>
  );
};

export default Word;
