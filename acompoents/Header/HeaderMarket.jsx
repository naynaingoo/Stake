import React from 'react';
import Image from 'next/image';
import Img from '../../images/coming soon.png';

function HeaderMarket() {
  return (
    <div className='market'>
        <div className='img text-center mt-3'>
            <Image src={Img} width={700} height={400} alt='' />
        </div>
    </div>
  )
}

export default HeaderMarket