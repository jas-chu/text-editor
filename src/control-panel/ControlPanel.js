import React, { useState } from "react";
import "./ControlPanel.css";

const ControlPanel = () => {
  return (
      <div id="control-panel">
        <div id="format-actions">
          <button
            className="format-action"
            type="button"
            onClick={() => console.log("bold")}
          >
            <b>B</b>
          </button>
          <button
            className="format-action"
            type="button"
            onClick={() => console.log("italic")}
          >
            <i>I</i>
          </button>
          <button
            className="format-action"
            type="button"
            onClick={() => console.log("underline")}
          >
            <u>U</u>
          </button>
        </div>
      </div>
  );
};

export default ControlPanel;
