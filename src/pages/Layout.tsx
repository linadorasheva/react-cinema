import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Layout = () => {
  return (
    <div className="layout">
      <Header className="layout__header" />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer className="layout__footer" />
    </div>
  );
};

export default Layout;
