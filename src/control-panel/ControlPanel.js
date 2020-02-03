import React from "react";
import "./ControlPanel.css";
import {connect} from 'react-redux';
import {clickBold, clickItalic, clickUnderline} from '../actions/index'

const ControlPanel = ({clickBold, clickItalic, clickUnderline, bold, italic, underline}) => {
  return (
      <div id="control-panel">
        <div id="format-actions">
          <button
            className="format-action"
            type="button"
            onClick={() => clickBold(bold)}
          >
            <b>B</b>
          </button>
          <button
            className="format-action"
            type="button"
            onClick={() => clickItalic(italic)}
          >
            <i>I</i>
          </button>
          <button
            className="format-action"
            type="button"
            onClick={() => clickUnderline(underline)}
          >
            <u>U</u>
          </button>
        </div>
      </div>
  );
};

function mapStateToProps(state) {
    return {
        bold: state.WordReducer.bold,
        italic: state.WordReducer.italic,
        underline: state.WordReducer.underline,
    };
  }

function matchDispatchToProps(dispatch){
    return {
        clickBold: (bold) => {
            dispatch(clickBold(bold));
        },
        clickItalic: (italic) => {
            dispatch(clickItalic(italic));
        },
        clickUnderline: (underline) => {
            dispatch(clickUnderline(underline));
        }
    };
}
  
export default connect(mapStateToProps, matchDispatchToProps)(ControlPanel);
