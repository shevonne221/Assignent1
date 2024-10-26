import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [educationData, setEducationData] = useState([])
  const[experiencedata, setexperience]= useState([])
  const[overviewdata, setoverviewdata]= useState([])


  useEffect(() => {

   fetch("http://localhost:8000/getEdu")
   .then((response)=> response.json())
   .then((data) => setEducationData (data))
   .catch((error) => console.error("error fetching education data:", error));


  },[]);


  
  useEffect(() => {

    fetch("http://localhost:8000/getexperience")
    .then((response)=> response.json())
    .then((data) => setexperience(data))
    .catch((error) => console.error("error fetching experience data:", error));
 
 
   },[]);


   useEffect(() => {

    fetch("http://localhost:8000/getoverview")
    .then((response)=> response.json())
    .then((data) => setoverviewdata(data))
    .catch((error) => console.error("error fetching overview data:", error));
 
 
   },[]);

  return (
    <div>
     <section id='edu'>
        <h2>Education</h2>
        {educationData.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
          </div>
        ))}
      </section>

      <section id='ex'>
        <h2>Experience</h2>
        {experiencedata.map((exp, index) => (
          <div key={index}>
            <h3>{exp.position}</h3>
            <p>{exp.company}</p>
          </div>
        ))}
      </section>

      <section id='ov'>
        <h2>Overview</h2>
        <p>{overviewdata}</p>
      </section>


    </div>
  )
}

export default App
