import React from "react";

const styles = {
  resume: { 
  display: 'flex',
  margin: '5%',
  justifyContent: 'center'
}
};
// need to add one link for attached resume
function About() {
  return (
    <div style={styles.resume}>
    <div className="card" >
      <div className="card-body" >
   
      <div style={styles.content}>
        <ul className="list-group">
          <a
            href="https://www.linkedin.com/in/dylan-quaale-2885881a4/"
            className="list-group-item list-group-item-action"
          >
            Click For My Resume
          </a>

          <li className="list-group-item disabled">React</li>
          <li className="list-group-item">Node.js</li>
          <li className="list-group-item">MongoDB</li>
          <li className="list-group-item">MySQL</li>
          <li className="list-group-item">NoSQL</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default About;
