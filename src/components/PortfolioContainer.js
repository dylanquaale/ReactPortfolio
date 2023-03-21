import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // TODO: Add a comment describing the functionality of this method
    //  checking to see if currentpage is one of the nav links and then render page if it is
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* // TODO: Add a comment describing what we are passing as props 
                  the props are that are being passed in are handlepage change and currentpage*/}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* // TODO: Add a comment explaining what is happening on the following line 
                redndering the data from the props*/}
        {renderPage()}
      </div>
    );
  }
  