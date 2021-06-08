import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, type }) => (
    <div>
      type == 'wrap' ? (
        <div>
          <Header />
            {children}
          <Footer />
        </div>
      ) : (
         <div className="test1">
           {children}
         </div>
      )
    </div>
  );
  
  export default Layout;
  