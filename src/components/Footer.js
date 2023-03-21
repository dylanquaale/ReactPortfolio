import React from 'react';

const styles = {
    footer: {
    display: 'flex',
      marginTop: 1000,
      background: 'light gray',
      height: 100,
      textAlign: 'center',
      marginBottom: '4rem'
    },
    // content: {
    //     display: 'flex',
    //   padding: 20,
    //   marginTop: '1000'
    // },
  };

  function Footer() {
    return (
      <div style={styles.footer}>
     
        {/* <div style={styles.content}> */}
       
        <footer className="footer">
			<div>
				<a
					href="https://github.com/dylanquaale/ReactPortfolio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/dylan-quaale-2885881a4/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/DylanRQuaale"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/twitter-logo.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
        </div>
    //   </div>
    );
  }

export default Footer;


