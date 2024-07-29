import { useRef } from "react";
import "./services.scss"; // Assuming you keep the SCSS file name as services.scss
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML/CSS",
  "Python",
  "Java",
  "C",
  "SQL",
  "MongoDB",
  "Git/GitHub",
  "ExpressJS",
  "Django",
  "Flask",
  "AWS Fundamentals",
  "LINUX/UNIX",
  "TypeScript",
  "Cybersecurity",
  "Web3",
  "Blockchain",
  "Solidity",
  "Bitcoin Script",
  "Go",
  "Rust",
  "Cosmos",
  "Cloud",
  "Flutter",
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          GM, Folks! <br /> I am Manas, your friendly neighborhood web3 wizard,
          swingin' in from the techiverse, ready to drop some alpha!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://avatars.githubusercontent.com/u/113188197?v=4"
            alt="Profile Picture"
          />
          <h1>Skills and Expertise</h1>
        </div>
        <div className="skillsContainer">
          <div className="skillsMarquee">
            {skills.map((skill, index) => (
              <div key={index} className="skillItem">
                {skill}
              </div>
            ))}
            {skills.map((skill, index) => (
              <div key={index + skills.length} className="skillItem">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <motion.div className="textContainer" variants={variants}>
          <p>
          <br />
            With a passion for open source and development, I'm swinging into
            action to tackle new challenges and craft innovative solutions in
            AI, Data Analytics, Flutter, DevOps and Blockchain. I thrive on
            clean code and making a real impact. Always ready to team up and
            build something extraordinary.
          </p>
          <hr />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
