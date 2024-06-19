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
          Hi, I'm [Your Name].
          <br /> I am passionate about [Your Passion].
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQ0VaH02t61ZkOv3RMonQuHcAKz2qOq-Q5w&usqp=CAU" alt="Profile Picture" />
          <h1>
            <motion.b whileHover={{ color: '#e101ff' }}>Passionate</motion.b> about [Your Passion]
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: '#e101ff' }}>Skills and Expertise</motion.b> in [Your Expertise].
          </h1>
          {/* Add more personal details or sections as needed */}
        </div>
        <motion.div className="textContainer" variants={variants}>
        <p>
          Hi, I'm [Your Name]. I am passionate about [Your Passion]. Here you can describe yourself in a few sentences or paragraphs.
        </p>
        <hr />
        </motion.div>
                <div align="center">
          <img src="https://skillicons.dev/icons?i=js" height="40" alt="javascript logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=ts" height="40" alt="typescript logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=aws" height="40" alt="aws logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=android" height="40" alt="android logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=bootstrap" height="40" alt="bootstrap logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=c" height="40" alt="c logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=canva" height="40" alt="canva logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=django" height="40" alt="django logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=figma" height="40" alt="figma logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=flask" height="40" alt="flask logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=git" height="40" alt="git logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=github" height="40" alt="github logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=html" height="40" alt="html5 logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=java" height="40" alt="java logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=linux" height="40" alt="linux logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=md" height="40" alt="markdown logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=mongodb" height="40" alt="mongodb logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=mysql" height="40" alt="mysql logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=nodejs" height="40" alt="nodejs logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=npm" height="40" alt="npm logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=pycharm" height="40" alt="pycharm logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=solidity" height="40" alt="solidity logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=rust" height="40" alt="rust logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=sqlite" height="40" alt="sqlite logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=tailwind" height="40" alt="tailwindcss logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=ubuntu" height="40" alt="ubuntu logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=vscode" height="40" alt="vscode logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=web3" height="40" alt="web3 logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=cairo" height="40" alt="cairo logo" />
          <img width="12" />
          <img src="https://skillicons.dev/icons?i=cairo" height="40" alt="flutter logo" />
          <img width="12" />
        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default Services;
