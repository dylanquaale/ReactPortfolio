import React from "react";
import socialImg from "../../assets/socialMedia.png";
import movieImg from "../../assets/cinema.png";
import techImg from "../../assets/techy.jpeg";
import calImg from "../../assets/cal.png";
import ticketImg from "../../assets/ticket.jpeg";
import textImg from "../../assets/textedit.png";

const styles = {
  style: {
    display: "flex",
    margin: "3%",
    marginLeft: "25%",
    marginRight: "25%",
    boxShadow: "0 2px 15px -3px rgba(249,250,250,1),0 10px 20px -2px rgba(255,255,255,0) "
   
  },
  cardBody: {
    padding: 10,
    background: "#F0F0F0"
  },
};

function Portfolio() {
  return (
    <div className="container" id="containerFd">
      <div className="card" style={styles.style} id="cardContainer">
        <div className="card-body" id="outerContainer">
          <h5 className="card-title">Team Final</h5>
          <img src={socialImg} alt="React" id="socialImg" />
          <p className="card-text">
        
          </p>
          <a
            href="https://arcane-savannah-38796.herokuapp.com/"
            className="card-link"
            id="cardLink"
          >
            Click Me
          </a>
        </div>
      </div>

      <div className="card" style={styles.style} id="cardContainer">
        <div className="card-body" id="outerContainer">
          <h5 className="card-title">Reelzgoodreviews</h5>
          <img src={movieImg} alt="React" id="socialImg" />
          <p className="card-text">
      
          </p>
          <a
            href="https://peaceful-plateau-13571.herokuapp.com/"
            className="card-link"
            id="cardLink"
          >
            Click Me
          </a>
        </div>
      </div>
      <div className="card" style={styles.style} id="cardContainer">
        <div className="card-body" id="outerContainer">
          <h5 className="card-title">Tech_Blog</h5>
          <img src={techImg} alt="React" id="socialImg" />
          <p className="card-text">

          </p>
          <a
            href="https://github.com/dylanquaale/tech-blog"
            className="card-link"
            id="cardLink"
          >
            Click Me
          </a>
        </div>
      </div>

      <div className="card" style={styles.style} id="cardContainer">
        <div className="card-body" id="outerContainer">
          <h5 className="card-title">Calander</h5>
          <img src={calImg} alt="React" id="socialImg" />
          <p className="card-text">
          
          </p>
          <a
            href="https://dylanquaale.github.io/workDay-Calander/"
            className="card-link"
            id="cardLink"
          >
            Click Me
          </a>
        </div>
      </div>
      <div className="card" style={styles.style} id="cardContainer">
        <div className="card-body" id="outerContainer">
          <h5 className="card-title">Eventster</h5>
          <img src={ticketImg} alt="React" id="socialImg" />
          <p className="card-text">
         
          </p>
          <a
            href="https://salenaoneill.github.io/eventster/"
            className="card-link"
            id="cardLink"
          >
            Click Me
          </a>
        </div>
      </div>
      <div className="card" style={styles.style} id="cardContainer">
        <div className="card-body" id="outerContainer">
          <h5 className="card-title">Text_Editor</h5>
          <img src={textImg} alt="React" id="socialImg" />
          <p className="card-text">
         
          </p>
          <a
            href="https://nameless-fortress-37560.herokuapp.com/"
            className="card-link"
            id="cardLink"
          >
            Click Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
