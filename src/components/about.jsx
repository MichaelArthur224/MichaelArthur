import "../css/about.css";


function About() {
  return (
      <div className="about">
        <h1>About</h1>
      <div className="about-container">
        <div className="text-bubble">
          <p>
          I am a software professional with an M.S. in Software Engineering and a B.S. in Computer Science. Currently an ERP Developer at PacSun, 
            I specialize in architecting Python ETL pipelines using PySpark and Pandas, optimizing Azure SQL queries, and managing large-scale data 
            with Microsoft Fabric and Snowflake. Previously, as a Software Developer Intern at Boardwalk Arcade, I optimized database performance, 
            and reduced load times. My background also includes years of leadership experience as a Team Leader at American Eagle Outfitters. 
            I am passionate about building high-performance, data-driven systems.
          </p>
        </div>
      </div>
      <h1>skills</h1>
      <div className="skill-container">
        <div className="text-bubble-skill">
          <p>
          <span>Programming Languages </span> - HTML, CSS, Javascript, Python, SQL, Java, Typescript, C++ <br />
          <span>Technologies</span> - Vite, Next, React, Express, Node, Flask, Pandas, Numpy, Matplotlib, Seaborn, Scikit Learn, XGBoost,
          TensorFlow, Keras, PyTorch, NLTK <br />
          <span>Software</span> - Microsoft PowerPoint, Google Slides, Microsoft Excel, Google Sheets, Adobe Creative Cloud, Tableau, Google Colab, Jupyter Notebooks, MySQL, Git, VS Code, Slack
          </p>
        </div>
      </div>
      <h1>Education</h1>
      <div className="edu-container">
        <div className="text-bubble-edu">
          <p><span>California State University Fullerton</span> - Master of Science in Software Engineering - January 2026<br />
          <span>National University</span> - Bachelor of Science in Computer Science - May 2024 
          </p>
        </div>
      </div>
      </div>
  );
}

export default About;
  
