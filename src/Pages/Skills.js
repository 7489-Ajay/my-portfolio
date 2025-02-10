import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";

const skillsData = [
  { skill: "HTML", percentage: 75 },
  { skill: "CSS", percentage: 60 },
  { skill: "JavaScript", percentage: 45 },
  { skill: "React.js", percentage: 80 },
  { skill: "Bootstrap", percentage: 50 },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Ensure animation runs only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
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


