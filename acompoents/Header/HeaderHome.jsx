import React from 'react';
// import './Header.css';
import personI from '../../images/Layer 16.png';
import CSoon from '../../images/coming soon.png';
import headerImg from '../../images/header.png';
import Image from 'next/image';

function HeaderHome() {
  return (
    <div className='HeaderHome'>
      <div className="container">
        <div className="text mt-2 d-flex justify-conter-center align-items-center">

          {/* <p>Street Scientists is a story inspired by a real event.</p>
          <p>
          It’s a story of a small neighborhood in the suburbs of Berfleur-Sur-Ken, on the periphery of the city, which has hot sand, coconut palms, and the blue ocean of the Caribbean.
          It’s summer, the sun burns the chrome of mopeds, heats the asphalt of the towers, suffocates the halls of buildings, and burns the spirits. 
          Here, everyone dreams of the beaches of Costa Rica. For Sammy Bosta and Tony la Tart, the two MCs of the neighborhood,
          The departure is imminent. But they lose the money of the tickets following a scam by the travel agency. Back to the Ginette box!
          To resurface, Tony moves to Montana like Scarface and tries to start a new business by unloading some fresh grass "nicely” advanced by Zoran, the dangerous psychopathic gangster of Berfleur-Sur-Ken.
          For his part, Sammy finds a job in the villa of Judge, the father of the beautiful Clemence. 
          Everything could have been run, if a mistress in fury, angry policemen, a tough judge, and the fury of summer had not decided otherwise…
          </p> */}
          <div className="img w-100 d-flex justify-content-center mt-20">
            <Image src={headerImg} width={1100} height={700} className='img-fluid' alt="" />
            {/* <img className='img-fluid' src={CSoon} alt="" /> */}
          </div>
        </div>
        <div className="person">
          {/* <img src={personI} width={300} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderHome