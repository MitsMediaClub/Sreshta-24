import React from 'react';
import Image from 'next/image';
import "./About.css"
//import the json file
import data from './StudentCouncil.json';
import mediaclub from './MediaClub.json';


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

      <div className='team-container'>
      <p className='subsection-title'>Media Club</p>
        <MediaClub data={mediaclub}/>
      </div>

      <div className='team-container'>
      <p className='subsection-title'>Web Dev</p>
        <MediaClub data={mediaclub}/>
      </div>
      
    </div>
  );
};



function StudentCouncil({data}){
  data.Leads.map((lead) => {
    console.log(lead)
  })
  return (
    <div className='student-council-container'>
      <p className='subsection-title'>STUDENT COUNCIL</p>
      <div className='student-council-leads-container'>
        {data.Leads.map((lead,index) => {
          return (
            <div className='student-council-leads' key={index}>
              <Image src={lead.image} height={300} width={300} className='lead-image'></Image>
              <div className='lead-details'>
                <p className='lead-name'>{lead.name}</p>
                <p className='lead-designation'>{lead.designation}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/*
      <div className='student-council-members-container'>
        {data.Members.map((member,index) => {
          return (
            <div className='student-council-members' key={index}>
              <Image src={member.image} height={200} width={200} layout="fixed" className='member-image'></Image>
              <div className='member-details'>
                <p className='member-name'>{member.name}</p>
                <p className='member-designation'>{member.designation}</p>
              </div>
            </div>
          )
        })}
      </div>
      */}
    </div>
  );

}

function MediaClub({data}){
  data.Members.map((member) => {
    console.log(member)
  })
  return (
      <div className='team-members-container'>
        {data.Members.map((member,index) => {
          return (
            <div className='team-members' key={index}>
              <Image src={member.image} height={200} width={150} layout="fixed" className='member-image'></Image>
              <div className='member-details'>
                <p className='member-name'>{member.name}</p>
                <p className='member-designation'>{member.designation}</p>
              </div>
            </div>
          )
        })}
      </div>
  );
}