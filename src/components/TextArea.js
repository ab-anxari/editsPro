import React, { useState } from "react";
import PropTypes from "prop-types";

function TextArea(props) {
  const [text, setText] = useState('');
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const convertUpCase = () => {
    setText(text.toUpperCase());
  };
  const convertLowCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const copyText = () => {
    const textField = document.getElementById('box');
    textField.select();
    navigator.clipboard.writeText(textField.value);
    
    if(text.length > 0) {
      props.showAlert("Text Copied!");
    }
    else {
      props.showAlert("First enter some text");
    }
  }

  return (
    <>
      <div className={`modeSwitch text-${props.currentMode === 'light'? 'dark' : 'light'}`}>
          <label className="form-check-label p-0" htmlFor="flexSwitchCheckDefault">
            <i className="fa-sharp fa-solid fa-sun mx-3 mt-2"></i>
          </label>
        <div className="form-check form-switch">
          <input
            className="form-check-input fs-5"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
        </div>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <i className="fa-sharp fa-solid fa-moon-stars"></i>
          </label>
      </div>
      <div className={`container text-${props.currentMode === 'light'? 'dark' : 'light'}`}>
        <h2 className="mt-5">{props.heading}</h2>
        <textarea
          className={`form-control my-4 txtArea bg-${props.currentMode === 'light'? 'light' : 'dark'}
          text-${props.currentMode === 'light'? 'dark' : 'light'}`}
          id="box"
          rows="8"
          placeholder="Here..."
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-success" onClick={convertUpCase}>
          Upper Case
        </button>
        <button className="btn btn-success mx-3" onClick={convertLowCase}>
          Lower Case
        </button>
        <button className="btn btn-success" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-3" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className={`container mt-5 text-${props.currentMode === 'light'? 'dark' : 'light'}`}>
        <h3>Text Summary</h3>
        <p id="summary">
          No. of words: <code className="bg-success">{text.split(" ").length}</code>&emsp; &emsp;No. of
          characters: <code className="bg-success">{text.length}</code>
        </p>
      </div>
    </>
  );
}

TextArea.propTypes = {
  heading: PropTypes.string.isRequired,
  currentMode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired
};
TextArea.defaultProps = {
  heading: "Enter the text below",
  currentMode: "light"
};

export default TextArea;
