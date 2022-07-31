import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../images/Layer 1.png';
import home from '../../images/{_HOME_}.png'
import stake from '../../images/{_STAKE_}.png'
import market from '../../images/{_MARKET_}.png';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div>
            <nav>
                <div className={style.container}>
                    <div className={style.navbar}>
                        <div className="navbar-brand">
                            <Image src={Logo} width={180} height={80} />
                        </div>
                        <div className={style.navbarNav}>
                            <Link href='/'>
                                <a> <Image src={home} width={180} height={80} className='img-fluid' /></a>
                            </Link>
                            <Link href='/streetscientists'>
                                <a><Image src={stake} width={180} height={80} className='img-fluid' /></a>
                            </Link>
                            <Link href='/market'>
                                <a><Image src={market} width={180} height={80} className='img-fluid' /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar