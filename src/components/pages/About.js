import React from "react";
import aboutImg from "../../assets/me.png";

const styles = {
  about: {
    display: "flex",
    borderRadius: 50,
    padding: 2,
    width: 380,
    margin: "auto",
    marginTop: 20,
    background: '#F5F5F5'
  },
  heading: {
    borderRadius: 10,
    margin: 50,
    background: "#0A66C2",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 40,
    background: "#F9FAFA",
  },
};

function About() {
  return (
    <div style={styles.about}>
      <div className="card" style={styles.content}>
        <div style={styles.heading}>About Me</div>
        <img src={aboutImg} className="card-img-top" alt="aboutImg" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
