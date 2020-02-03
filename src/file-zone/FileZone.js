import React, { useState } from "react";
import "./FileZone.css";
import Word from "../word";

const FileZone = (actions) => {
  const [text, setText] = useState("Your text goes here");
  const [wordSelected, setWordSelected] = useState("");

  const words = text.split(" ");
  console.log("words: ", words);
  return (
    <div id="file-zone">
      <div id="file">
        {words.map((word, index) => (
          <Word text={word} index={index} actions={actions} wordSelected={wordSelected} setWordSelected={setWordSelected}/>
        ))}
      </div>
    </div>
  );
};

export default FileZone;
