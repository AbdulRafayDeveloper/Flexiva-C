import React from 'react';
import Header from '../includes/header';
import Footer from '../includes/footer';



function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;