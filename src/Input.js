import React from "react";
import colornames from "colornames"
function Input(props) {
  const { colorValue, setColorValue, setHexValue, darkText, setDarkText } =
    props;
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Type here..."
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colornames(e.target.value));
          }}
        />
        <button className="btn" onClick={() => setDarkText(!darkText)}>
          Toggle
        </button>
      </form>
    </div>
  );
}

export default Input;
