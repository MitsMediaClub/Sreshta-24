import React from 'react';
import Image from 'next/image';
import "./About.css"
//import the json file
import data from './StudentCouncil.json';


export default function AboutPage() {
  return (
  
    <div className='bg-tech-bg about-container'>
      <nav className="flex items-center justify-between p-6 ">
        <div className="text-2xl font-bold">Logo</div>
      </nav>
      <p className='our-team-main-text'>OUR TEAM</p>
      <p className='our-team-subtext'>The Heroes, the Legends, the Myths</p>
      <div className='background-image gradient-overlay'></div>
      <StudentCouncil data={data}/>
    </div>
  );
};



function StudentCouncil({data}){
  data.Leads.map((lead) => {
    console.log(lead)
  })
  return (
    <div className='members-container'>
      <p className='subsection-title'>STUDENT COUNCIL</p>
      <div className='student-council-leads-container'>
        {data.Leads.map((lead,index) => {
          return (
            <div className='student-council-leads' key={index}>
              <img className='lead-image' src={lead.image} alt={lead.name} />
              <div className='lead-details'>
                <p className='lead-name'>{lead.name}</p>
                <p className='lead-designation'>{lead.designation}</p>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  );


}

function MediaClub(){}