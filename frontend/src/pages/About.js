import React from "react";

import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          VCube Software Solutions is an educational technology company dedicated to enhancing 
          student learning through a diverse range of interactive software tools. These tools 
          cater to various educational levels and subjects, offering simulations, virtual labs, 
          and gamified features to engage students actively. VCube emphasizes accessibility for 
          all learners, including those with disabilities, and provides analytics for educators 
          to track student progress. Their software aligns with curriculum standards, offers 
          cloud-based access, and can be customized to fit the unique needs of educational 
          institutions. With a focus on practical application and a commitment to supporting
          educators, VCube empowers students to develop essential skills in a dynamic learning environment.
        </p>
      </div>
    </div>
  );
}

export default About;