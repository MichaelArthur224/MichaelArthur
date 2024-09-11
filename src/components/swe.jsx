import { useState } from 'react';
import "../css/swe.css";

function Swe() {
  // State to control the ropdown for BoardWalk
  const [isBoardWalkOpen, setIsBoardWalkOpen] = useState(false);
  const [isParkPalOpen, setIsParkPalOpen] = useState(false);
  const [isMySpotifyOpen, setIsMySpotifyOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  // dropdown visibility for BoardWalk
  const toggleBoardWalk = () => {
    setIsBoardWalkOpen((prev) => !prev);
  };
  // dropdown visibility for ParkPal
  const toggleParkPal = () => {
    setIsParkPalOpen((prev) => !prev);
  };
    // dropdown visibility for MySpotify
  const toggleMySpotify = () => {
    setIsMySpotifyOpen((prev) => !prev);
  };
     // dropdown visibility for Portfolio
     const togglePortfolio = () => {
      setIsPortfolioOpen((prev) => !prev);
    };

  return (
    <div className="wrapper">
      {/* BOARDWALK */}
      <div className="swe-cont">
        <div className="project-1">
          <h2>BoardWalk Ticket System</h2>
          {/* Dropdown content for BoardWalk */}
          {isBoardWalkOpen && (
            <div className="dropdown-content">
              <p>Additional content can be found in resume</p>
            </div>
          )}
          <a className="toggle-button" onClick={toggleBoardWalk}>
            {isBoardWalkOpen ? 'Less' : 'More'}
          </a>
          <a className="code-link">
            N/A
          </a>
        </div>
      </div>

      {/* PARKPAL */}
      <div className="swe-cont">
        <div className="project-2">
          <h2>PARKPAL</h2>
          {/* Dropdown content for ParkPal */}
          {isParkPalOpen && (
            <div className="dropdown-content">
              <p>Full-Stack React Application with Flask backend</p>
            </div>
          )}
          <a className="toggle-button" onClick={toggleParkPal}>
            {isParkPalOpen ? 'Less' : 'More'}
          </a>
          <a
            href="https://devpost.com/software/parkpal-mou3sk"
            className="code-link"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>

      {/* MySpotify */}
      <div className="swe-cont">
        <div className="project-3">
          <h2>MySpotify</h2>
            {/* Dropdown content for My Spotify */}
            {isMySpotifyOpen && (
            <div className="dropdown-content">
              <p>Full-Stack React Application with Node backend</p>
            </div>
          )}
          <a className="toggle-button" onClick={toggleMySpotify}>
            {isMySpotifyOpen ? 'Less' : 'More'}
          </a>
          <a
            href="https://github.com/MichaelArthur224/MySpotify"
            className="code-link"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>

      <div className="swe-cont">
        <div className="project-4">
          <h2>Portfolio</h2>
           {/* Dropdown content for Portfolio */}
           {isPortfolioOpen && (
            <div className="dropdown-content">
              <p>React Application styled with CSS</p>
            </div>
          )}
          <a className="toggle-button" onClick={togglePortfolio}>
            {isPortfolioOpen ? 'Less' : 'More'}
          </a>
          <a
            href="https://github.com/MichaelArthur224/Portfolio"
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

export default Swe;


  