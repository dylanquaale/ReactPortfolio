
import React from 'react';
import aboutImg from '../../assets/me.png'

const styles = {
    about: {
      display: 'flex',
      borderRadius: 50,
      padding: 2,
      width: 380,
      margin: 'auto',
      marginTop: 20,
     
    },
    heading: {
      borderRadius: 10,
      margin: 50,
      background: '#0A66C2',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
      
    },
    content: {
      padding: 40,
      background: "#F9FAFA",
      
    },
  };

function About() {
    return (
      
      <div style={styles.about}>
        
        {/* <img src= {aboutImg}  alt="React" />
        <div style={styles.content}>
          `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?`
        </div>
      </div> */}
      


      <div className="card" style={styles.content}>
      <div style={styles.heading}>About Me</div>
  <img src= {aboutImg} className="card-img-top" alt="aboutImg" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

      </div>
      
    );
  }

export default About;