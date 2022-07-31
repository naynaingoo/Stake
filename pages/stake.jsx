import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from '../acompoents/Navbar/Navbar';
import HeaderStake from './[stakePoolId]/index';
import Footer from '../acompoents/Footer/Footer';
import Head from 'next/head';
import style from './style.module.css';

function Home() {
  return (
    <div className={style.home}>
      <Head>
        <title>STREET SCIENTISTS | Market</title>
      </Head>
      {/* <Navbar/> */}
      <div className={style.header}>
        <HeaderStake />
      </div>
      <Footer />
    </div>
  )
}

export default Home