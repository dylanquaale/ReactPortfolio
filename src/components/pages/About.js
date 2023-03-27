import React from "react";
import aboutImg from "../../assets/me.png";

const styles = {
  about: {
    display: "flex",
    borderRadius: 50,
    padding: 9,
    width: 380,
    margin: "auto",
    marginTop: 30,
    marginBottom: 30,
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
    background: "#F0F0F0",
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
            Hi my name is Dylan, and I am about to be a graduate of a full stack development bootcamp!
            I am super excited for the next part of my tech journey.
            I am currently a realtor however always having a desire for tech I finally took the leap to start my dream.
            My love for technology goes back as long as I can remember. I have always had a "knack" with tech I guess you could say.
            Super excited for this next chapter!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
