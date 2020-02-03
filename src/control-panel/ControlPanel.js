import React from "react";
import "./ControlPanel.css";
import {connect} from 'react-redux';
import {clickBold, clickItalic, clickUnderline} from '../actions/index'

const ControlPanel = () => {
  return (
      <div id="control-panel">
        <div id="format-actions">
          <button
            className="format-action"
            type="button"
            onClick={() => clickBold()}
          >
            <b>B</b>
          </button>
          <button
            className="format-action"
            type="button"
            onClick={() => clickItalic()}
          >
            <i>I</i>
          </button>
          <button
            className="format-action"
            type="button"
            onClick={() => clickUnderline()}
          >
            <u>U</u>
          </button>
        </div>
      </div>
  );
};

function matchDispatchToProps(dispatch){
    return {
        clickBold: () => {
            dispatch(clickBold());
        },
        clickItalic: () => {
            dispatch(clickItalic());
        },
        clickUnderline: () => {
            dispatch(clickUnderline());
        }
    };
}
  
export default connect(null, matchDispatchToProps)(ControlPanel);
