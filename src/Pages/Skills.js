import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";

const skillsData = [
  { skill: "HTML5 & CSS3", percentage: 75 },
  { skill: "JavaScript", percentage: 60 },
  { skill: "Bootstrap", percentage: 65 },
  { skill: "Tailwind CSS", percentage: 70 },
  { skill: "MongoDB", percentage: 50 },
  { skill: "Express.js", percentage: 68 },
  { skill: "React.js", percentage: 80 },
  { skill: "Node.js", percentage: 75 },
  
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-container" ref={skillsRef}>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-header">
              <span className="skill-name">{skill.skill}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="progress-bar-container">
              <div
                className={`progress-bar ${visible ? "animate" : ""}`}
                style={{ width: visible ? `${skill.percentage}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;


