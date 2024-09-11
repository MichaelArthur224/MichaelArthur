import { useState } from 'react';
import "../css/swe.css";

function Data() {
  // State to control the dropdown
  const [isStrokeOpen, setIsStrokeOpen] = useState(false);
  const [isStockOpen, setIsStockOpen] = useState(false);
  const [isYelpOpen, setIsYelpOpen] = useState(false);
  const [isVideoGameOpen, setIsVideoGameOpen] = useState(false);

// dropdown visibility for Stroke
    const toggleStroke = () => {
    setIsStrokeOpen((prev) => !prev);
  };
// dropdown visibility for Stock
    const toggleStock = () => {
    setIsStockOpen((prev) => !prev);
  };
// dropdown visibility for Yelp
    const toggleYelp = () => {
    setIsYelpOpen((prev) => !prev);
  };
// dropdown visibility for Video Games
    const toggleVideoGame = () => {
      setIsVideoGameOpen((prev) => !prev);
    };

  return (
    <div className="wrapper">
      {/* Stroke */}
      <div className="swe-cont">
        <div className="project-1">
          <h2>Stroke Prediction</h2>
          {/* Dropdown content for Stroke */}
          {isStrokeOpen && (
            <div className="dropdown-content">
              <p>A random forest classification model with Xgboost </p>
            </div>
          )}
          <a className="toggle-button" onClick={toggleStroke}>
            {isStrokeOpen ? 'Less' : 'More'}
          </a>
          <a
            href="https://github.com/MichaelArthur224/Stroke_Prediction"
            className="code-link"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>

      {/* STOCK */}
      <div className="swe-cont">
        <div className="project-2">
          <h2>Stock Price Prediction</h2>
          {/* Dropdown content for STOCK */}
          {isStockOpen && (
            <div className="dropdown-content">
              <p>A random forest regression model</p>
            </div>
          )}
          <a className="toggle-button" onClick={toggleStock}>
            {isStockOpen ? 'Less' : 'More'}
          </a>
          <a
            href="https://github.com/MichaelArthur224/Netflix_Stock_Prediction_Analysis"
            className="code-link"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>

      {/* YELP */}
      <div className="swe-cont">
        <div className="project-3">
          <h2>Yelp API Analysis</h2>
            {/* Dropdown content for Yelp */}
            {isYelpOpen && (
            <div className="dropdown-content">
              <p>EDA with data from yelp api</p>
            </div>
          )}
          <a className="toggle-button" onClick={toggleYelp}>
            {isYelpOpen ? 'Less' : 'More'}
          </a>
          <a
            href="https://github.com/MichaelArthur224/Yelp_API_SQL_Analysis"
            className="code-link"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>

          {/* VIDEO GAMES */}
      <div className="swe-cont">
        <div className="project-4">
          <h2>Video Game Sales</h2>
           {/* Dropdown content for videogame */}
           {isVideoGameOpen && (
            <div className="dropdown-content">
              <p>EDA of video game sales</p>
            </div>
          )}
          <a className="toggle-button" onClick={toggleVideoGame}>
            {isVideoGameOpen ? 'Less' : 'More'}
          </a>
          <a
            href="https://github.com/MichaelArthur224/Video_Game_EDA"
            className="code-link"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Data;