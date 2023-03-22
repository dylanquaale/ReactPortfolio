import React from 'react';
import aboutImg from '../../assets/linux.png'

const styles = {
    about: {
      margin: 200,
      background: '#e8eaf6',
      borderRadius: 50,
      padding: 1
    },
    heading: {
      borderRadius: 10,
      margin: 50,
      background: '#3f51b5',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 40,
    },
  };

function About() {
    return (
      <div style={styles.about}>
        <div style={styles.heading}>About Me</div>
        <img src= {aboutImg}  alt="React" />
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
      </div>
    );
  }

export default About;