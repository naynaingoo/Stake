import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from '../acompoents/Navbar/Navbar';
import HeaderHome from '../acompoents/Header/HeaderHome';
import Footer from '../acompoents/Footer/Footer';
import Head from 'next/head';
import style from './style.module.css';

function Home() {
  return (
    <div className={style.home}>
      <Head>
        <title>STREET SCIENTISTS</title>
      </Head>
      <Navbar />
      <div className={style.header}>
        <HeaderHome />
      </div>
      <Footer />
    </div>
  )
}

export default Home