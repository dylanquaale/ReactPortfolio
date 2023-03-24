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
    background: "#F9FAFA",
    margin: "10%",
  },
 cardBody: {
  padding: 100
 }
};

function Portfolio() {
  return (
    <div style={styles.portfolio}>
      <div className="container"></div>
      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Social Network</h5>
          <img  src={socialImg} alt="React" id="socialImg" />
          <p className="card-text">
            Users can create thoughts and add reactions to one another. API for
            a social network web application where users can share their
            thoughts, react to friends thoughts, and create a friend list. You
            use Express.js for routing, a MongoDB database, and the Mongoose
            ODM. In addition to using the Express.js and Mongoose packages, you
            may also optionally use a JavaScript date library of your choice or
            the native JavaScript Date object to format timestamps.
          </p>
          <a
            href="https://github.com/dylanquaale/Social_Network"
            className="card-link"
          >
            Click Me
          </a>
        </div>
      </div>

      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Reelzgoodreviews</h5>
          <img src={movieImg} alt="React" id="socialImg" />
          <p className="card-text">
            We created an app that allows a user to create an account and login
            using that account. Once that user is logged in they have the
            ability to see the top 50 rated movies on IMDB. They also have the
            ability to write/store/ delete reviews on the top 50 movies as well
            as any movie they would like.
          </p>
          <a
            href="https://peaceful-plateau-13571.herokuapp.com/"
            className="card-link"
          >
            Click Me
          </a>
        </div>
      </div>

      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Tech_Blog</h5>
          <img src={techImg} alt="React" id="socialImg" />
          <p className="card-text">
            This Tech Blog is a place where fellow tech communities can come to
            chat about anything and everything. You must signup before
            interacting with anything on the page including making posts, You
            are able to create posts after signed up or logged in. You are able
            to edit and delte your posts, along with leave comments on others
            posts. To leave the site just simply logout. Usage
          </p>
          <a
            href="https://github.com/dylanquaale/tech-blog"
            className="card-link"
          >
            Click Me
          </a>
        </div>
      </div>
      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Calander</h5>
          <img src={calImg} alt="React" id="socialImg" />
          <p className="card-text">
            Created this for you to easily plan your work day. Your schedule
            will display the current date at the top of the page. Below will
            display your time blocks for the day. You will also be able to save
            and delete what you have going on in your day. Was not able to
            change the colors to display past present and future not sure what I
            am doing wrong here,
          </p>
          <a
            href="https:https://dylanquaale.github.io/workDay-Calander/"
            className="card-link"
          >
            Click Me
          </a>
        </div>
      </div>
      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Eventster</h5>
          <img src={ticketImg} alt="React" id="socialImg" />
          <p className="card-text">
            Evenster was created to allow the user to input in a city and
            receive a list of events and the weather in and around the area. THe
            user is able to input any city around the United States. The events
            are then pulled through the 3rd party API; Ticketmaster and
            displayed to the user. Alongside ticketmaster this page aso uses The
            Weather API and it displays the weather alongside the events. This
            project allowed us to use what we were taught in class over the past
            6 weeks. That included HTML, JavaScripts, CSS, and APIs. This
            project also allowed us to be able to work together as a group to
            complete tasks and resolve issues.
          </p>
          <a
            href="https://salenaoneill.github.io/eventster/"
            className="card-link"
          >
            Click Me
          </a>
        </div>
      </div>
      <div className="card" style={styles.style}>
        <div className="card-body">
          <h5 className="card-title">Text_Editor</h5>
          <img src={textImg} alt="React" id="socialImg"/>
          <p className="card-text">
            This a text editor that will allow users to save text that they do
            not wish to loose. AS A developer I WANT to create notes or code
            snippets with or without an internet connection SO THAT I can
            reliably retrieve them for later use We are using webpacks to
            generate the page.
          </p>
          <a
            href="https://nameless-fortress-37560.herokuapp.com/"
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
