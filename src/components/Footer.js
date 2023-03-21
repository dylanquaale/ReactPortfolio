// import React from 'react';

// const styles = {
//     footer: {
//       display: 'flex',
//       marginTop: 1000,
//       background: 'red',
//       lineHeight: 5
//     },
//    a: {
//     display: 'inline-block',
//     position: 'absolute',
//     flexDirection: 'column'
//    },
//     content: {
//         display: 'inline-block',
//       padding: 20,
//       marginTop: '1000'
//     },
//   };

//   // noopener/noreferrer/ for security reasons BCS helped give me this 
//   function Footer() {
//     return (
//       <div style={styles.footer}>
     
//         <div style={styles.content}>
       
//         <footer className="logo">
// 			<div>
// 				<a
// 					href="https://github.com/dylanquaale/ReactPortfolio"
// 					target="none"
// 					rel="noopener noreferrer"
// 				>
// 					<img
// 						src={require("../assets/github-logo.png")}
// 						alt="Github"
// 						className="logo"
// 					></img>
// 				</a>
// 			</div>
// 			<div>
// 				<a
// 					href="https://www.linkedin.com/in/dylan-quaale-2885881a4/"
// 					target="none"
// 					rel="noopener noreferrer"
// 				>
// 					<img
// 						src={require("../assets/linkedin-logo.png")}
// 						alt="LinkedIn"
// 						className="logo"
// 					></img>
// 				</a>
// 			</div>
// 			<div>
// 				<a
// 					href="https://twitter.com/DylanRQuaale"
// 					target="none"
// 					rel="noopener noreferrer"
// 				>
// 					<img
// 						src={require("../assets/twitter-logo.png")}
// 						alt="Twitter"
// 						className="logo"
// 					></img>
// 				</a>
// 			</div>
// 		</footer>
//         </div>
//         </div>
//     );
//   }

// export default Footer;

import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
            
          >
            
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            {/* <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          > */}
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}