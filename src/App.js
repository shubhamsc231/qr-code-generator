import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setinputValue] = useState("");
  const handleChange = (event) => {
    setinputValue(event.target.value);
  };
  const [imagesrc, setimagesrc] = useState();
  const handleGenerateButton = async () => {
    setimagesrc(
      `http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}!&size=400x400&bgcolor=white`
    );
  };
  const handleLinkClick = (medium) => {
    switch (medium) {
      case "instagram":
        setinputValue("www.instagram.com/");
        break;
      case "facebook":
        setinputValue("www.facebook.com/");
        break;
      case "twitter":
        setinputValue("www.twitter.com/");
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <div className="HeadingTitle">QR Code Generator</div>
      <div className="pageBody">
        <div className="fieldContainer">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="input-field"
          />
          <button className="generate-button" onClick={handleGenerateButton}>
            Generate
          </button>
        </div>
        <div>{imagesrc && <img src={imagesrc} alt="image" />}</div>
      </div>
      <div>
        <button onClick={() => handleLinkClick("instagram")}>Instagram</button>
        <button onClick={() => handleLinkClick("twitter")}>Twitter</button>
        <button onClick={() => handleLinkClick("facebook")}>Facebooks</button>
      </div>
    </div>
  );
}

export default App;
