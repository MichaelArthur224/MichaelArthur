import "../css/about.css";


function About() {
  return (
      <div className="about">
        <h1>About</h1>
      <div className="about-container">
        <div className="text-bubble">
          <p>
          I hold a Bachelor’s degree in Computer Science from National University and 
          am currently pursuing a Master’s in Software Engineering at CSU Fullerton. 
          With a strong foundation in software development and data science, I thrive 
          on projects that combine creativity with technical expertise. My skills in 
          software design and data analysis enable me to transform complex problems into 
          actionable solutions. I am dedicated to continuous learning in software 
          engineering and data science to stay at the forefront of the evolving tech 
          landscape. 
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
  