import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import {selectWord} from '../actions/index'
import "./Word.css";

const Word = ({ text, index, currentWord, selectWord, bold, italic, underline }) => {
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);

  let format = index === currentWord? "selected " : "";
  format = (index === currentWord && bold) || isBold? format + "bold ": format;
  format = (index === currentWord && italic) || isItalic? format + "italic ": format;
  format = (index === currentWord && underline) || isUnderline? format + "underline ": format;

  useEffect(() => {
    if (bold !== isBold && index === currentWord) setBold(bold);
    if (italic !== isItalic && index === currentWord) setItalic(italic);
    if (underline !== isUnderline && index === currentWord) setUnderline(underline);
  }, [bold, italic, underline]);

  return (
    <div className={"word " + format}>
      <span key={index} onClick={() => {selectWord(currentWord === index? "" : index)}}>
        {text + " "}
      </span>
    </div>
  );
};

function mapStateToProps(state) {
  return {
      currentWord: state.WordReducer.currentWord,
      bold: state.WordReducer.bold,
      italic: state.WordReducer.italic,
      underline: state.WordReducer.underline,
  };
}

function matchDispatchToProps(dispatch){
  return {
    selectWord: (word) => {
      dispatch(selectWord(word));
    }
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Word);
