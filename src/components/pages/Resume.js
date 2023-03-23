import React from "react";

const styles = {};
// need to add one link for attached resume
function About() {
  return (
    <div style={styles.about}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        <ul class="list-group">
          <a
            href="https://www.linkedin.com/in/dylan-quaale-2885881a4/"
            class="list-group-item list-group-item-action"
          >
            Dapibus ac facilisis in
          </a>

          <li class="list-group-item disabled">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
