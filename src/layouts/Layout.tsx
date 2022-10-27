import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="content grow bg-gray-400 p-8 flex justify-center items-center">
        <div className="container grow flex justify-center items-center">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Layout;
