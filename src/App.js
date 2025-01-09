import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setinputValue] = useState("");
  const handleChange = (event) => {
    setinputValue(event.target.value);
  };
  const [imagesrc, setimagesrc] = useState();
  const handleGenerateButton = async () => {
    inputValue != "" &&
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
      case "youtube":
        setinputValue("www.youtube.com/");
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <div className="HeadingTitle">QR Code Generator</div>
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
      <div className="socialMediaBox">
        <img
          src={"./instagram.png"}
          alt=""
          onClick={() => handleLinkClick("instagram")}
        ></img>
        <img
          src={"./youtube.png"}
          alt=""
          onClick={() => handleLinkClick("youtube")}
        ></img>
        <img
          src={"./facebook.png"}
          alt=""
          onClick={() => handleLinkClick("facebook")}
        ></img>
      </div>
      <div>{imagesrc && <img src={imagesrc} alt="image" />}</div>
    </div>
  );
}

export default App;
