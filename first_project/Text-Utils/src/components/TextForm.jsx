import React from "react";
import { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");

  const changeValue = (e) => {
    const newText = e.target.value;
    setText(newText);
  };
  const upper = () => {
    const uppercase = text.toUpperCase();
    setText(uppercase);
  };
  const lower = () => {
    const lowercase = text.toLowerCase();
    setText(lowercase);
  };
  const clear = () => {
    setText("");
  };

  const copyText = () => {
    let text = document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleWhiteSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const wordCount = (text) => {
    if (text.length === 0) return 0;
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") count++;
      if (text[i] === text[i + 1] && text[i] === " ") count--;
    }
    if(text[0] === ' ') count--;
    if(text[text.length-1] === ' ') count--;
    return ++count;
  };
  
  const charCount = (text) => {
    let count = text.length;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") count--;
    }
    return count;
  };

  return (
    <>
      <div className="container">
        <div className="my-4">
          <h2>Enter your text here...</h2>
          <textarea
            className="form-control"
            id="text"
            rows="5"
            value={text}
            onChange={changeValue}
          ></textarea>
          <button className="btn btn-primary my-4 mx-2" onClick={upper}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={lower}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={clear}>
            Clear Text
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={copyText}>
            Copy Text
          </button>
          <button
            className="btn btn-primary my-4 mx-2"
            onClick={handleWhiteSpace}
          >
            {" "}
            Remove Extra White Space
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {wordCount(text)} words and {charCount(text)} charecters
        </p>
        <h2>Preview</h2> <hr />
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
