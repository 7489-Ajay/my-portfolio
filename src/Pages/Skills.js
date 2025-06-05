import React, { useEffect, useRef, useState } from "react";
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
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-container" ref={skillsRef}>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const offset = visible
            ? circumference - (skill.percentage / 100) * circumference
            : circumference;

          return (
            <div key={index} className="circular-skill">
              <div className="circle-wrapper">
                <svg className="circle-svg">
                  <circle className="bg-circle" r="50" cx="60" cy="60" />
                  <circle
                    className="fg-circle"
                    r="50"
                    cx="60"
                    cy="60"
                    style={{
                      strokeDasharray: circumference,
                      strokeDashoffset: offset,
                    }}
                  />
                </svg>
                <div className="circle-text">
                  <div className="skill-name-inside">{skill.skill}</div>
                  <div className="percentage-inside">{skill.percentage}%</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;






