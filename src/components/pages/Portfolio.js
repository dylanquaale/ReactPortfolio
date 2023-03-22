import React from "react";
import aboutImg from "../../assets/linux.png";

const styles = {
  style: {
    // display: "flex",
    // justifyContent: "center",
    // margin: "0 auto",
    // borderRadius: 100,
    // width: "40%",
    // background: "#e8eaf6",
    // paddingTop: 20,
    // paddingBottom: 20,
    // position: "relative",

    // borderRadius: 100,
    // margin: 50,
    // background: '#3f51b5',
    // minHeight: 50,
    // lineHeight: 3.5,
    // fontSize: '1.2rem',
    // color: 'white',
    // padding: '0 20px',

    display: 'flex',
    background: "#e8eaf6",
    margin: '10%',
   
  },
};

function Portfolio() {
  return (
    <div style={styles.portfolio}>
      <div className="container"></div>
      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <img src={aboutImg} alt="React" />
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.linkedin.com/in/dylan-quaale-2885881a4/"
            className="card-link"
          >
            Click Me
          </a>
        </div>
      </div>

      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <img src={aboutImg} alt="React" />
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.linkedin.com/in/dylan-quaale-2885881a4/"
            className="card-link"
          >
            Click Me
          </a>
        </div>
      </div>

      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <img src={aboutImg} alt="React" />
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.linkedin.com/in/dylan-quaale-2885881a4/"
            className="card-link"
          >
            Click Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
