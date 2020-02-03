import React, { useState } from "react";
import {connect} from 'react-redux';
import {selectWord} from '../actions/index'
import "./Word.css";

const Word = ({ text, index, currentWord, selectWord, bold, italic, underline }) => {
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);

  console.log(index, currentWord);
  let format = index === currentWord? format + "selected " : format;

  return (
    <div className={"word " + format}>
      <span key={index} onClick={() => {console.log("current: ", currentWord); selectWord(currentWord === index? "" : index)}}>
        {text + " "}
      </span>
    </div>
  );
};

function mapStateToProps(state) {
  return {
      currentWord: state.currentWord
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
