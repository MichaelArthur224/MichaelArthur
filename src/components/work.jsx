import "../css/work.css";
import { Link } from 'react-router-dom';


function Work() {
  return (
    
    <div className="work-wrapper">
      <h1>Work</h1>
      <div className="container-wrap">
      <Link to="/data" className="click">
        <div className="data-container">
          <div className="data-science">
            <h2>Data Science</h2>
          </div>
        </div>
      </Link>

     <Link to ="/swe" className="click">
      <div className="swe-container">
        <div className="swe">
            <h2>Software Engineering</h2>
        </div>
      </div>
      </Link>
    </div>
    </div>
  );
}

export default Work;