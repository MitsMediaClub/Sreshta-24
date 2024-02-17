import React from 'react';
import Image from 'next/image';
import "./About.css"

export default function AboutPage() {
  return (
  
    <div className='bg-tech-bg about-container'>
      <nav className="flex items-center justify-between p-6 ">
        <div className="text-2xl font-bold">Logo</div>
      </nav>
      <p className='our-team-main-text'>OUR TEAM</p>
      <p className='our-team-subtext'>The Heroes, the Legends, the Myths</p>
      <div className='background-image gradient-overlay'></div>
    </div>
  );
};



function StudentCouncil(){

}

function MediaClub(){}