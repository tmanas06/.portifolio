import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "speech to text application on python and google cloud",
    img: "https://codelabs.developers.google.com/static/codelabs/cloud-speech-text-python3/img/9e7124a578332fed.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://github.com/tmanas06/g2210030003", // Example link, replace with actual project URL
  },
  {
    id: 2,
    title: "Shopping e-commerce application",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZIMuFIbiVBDd6BjeDM4a2ApAGBgGxXi6GwEL5V3zlu0vGNgllZ52ZhKA56h-wqd36Tk&usqp=CAU",
    desc: "Shopping Application project created on mern stack.",
    link: "https://github.com/tmanas06/mern-stack-simple-project",
  },
  {
    id: 3,
    title: "weather application on cli and web",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJHWwFJPrlJ4XeAdpPP5iWz4iwj4QCYwfzg&s",
    link: "https://github.com/tmanas06/weather_application",
    desc: "A simple weather application created on html and css.",
  },
  {
    id: 4,
    title: "Static image application in flutter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUmuwZfH6oislpSYTw8StsD1hpszsaLIyiQ&s",
    link: "https://github.com/tmanas06/android_studio_first_app",
    desc: "This project is a similar project to i_am_rich app which was launched in ios in 2010",
  },
  {
    id: 5,
    title: "Music application with integrated chat feature using MERN stack",
    img: "https://th.bing.com/th/id/OIP.C85p0nXx8jle1XoKfWCRYAHaDk?rs=1&pid=ImgDetMain",
    link: "https://github.com/tmanas06/Stellar_society_project",
    desc: "A space themed music application with integrated chat feature using MERN stack.",
  },
  {
    id: 6,
    title: "To-do-list on Blockchain",
    img: "https://private-user-images.githubusercontent.com/113188197/305035883-8e5f367c-4882-4b17-b217-6014f632a452.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIyMjM2OTQsIm5iZiI6MTcyMjIyMzM5NCwicGF0aCI6Ii8xMTMxODgxOTcvMzA1MDM1ODgzLThlNWYzNjdjLTQ4ODItNGIxNy1iMjE3LTYwMTRmNjMyYTQ1Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyOVQwMzIzMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMGYzNDg3YzdkN2I3OTgyYzkwMDI0MWQ3NjliZTRjZTQyYzNmMjk3M2M5NzNlMGM0ZjhmY2YzOWUwZDY4NTA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5PjnA7h0Pe_xAZMLHplSViQ_qGU_rNhvHZ9hszEOeBM",
    link: "https://github.com/tmanas06/To-do-list-",
    desc: "A simple to-do-list application on blockchain using remix ide and solidity on VS Code.",
  },
];

const blogs = [
  {
    id: 1,
    title: "DEEP DIVE INTO COSMWASM CONTRACT STANDARDS: CW20, CW721, CW4, AND CW3",
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEjr1mnzxV7JwmVFbIpTcrMaVGyHqo1y6i8ZJ5-XumXalUlPni-tqGll00s0T8zfJdwRboqhN5eBDHJwDXjG6QASix71TTw_u-6MAg1A3-PzcrRwtnNV6gOnoG-GTG6789dMnKNLsEMErgEUtSL-dg4htAG7pepjCa6LYtk-i32KAtJCUa8jY59cLVnHylE",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "ORAICHAIN ARCHITECTURE",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-6fZln_bvZyMUWZBODM8mxeAgvS6pBwx8kiS3dpYG_liMN1o5GS1WIkQF5beRWeQOBh0FxDus1e8I8fAgJmLxjUSyUA9q4Gr5PELqUlpaH1xU9If_WMPM0bAgOLezBl3Aecm9A6s5ti85M0Oul64LN961bywz9oVYruPBV7HjGb4lk_byfejAWO130lA/s320/img2.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>Check this out</button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="center-title">Projects</h2>
      {projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

const Blogs = () => {
  return (
    <div className="blogs">
      <h2 className="center-title">Blogs</h2>
      {blogs.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 style={{ fontFamily: "'cyberway-riders-font-f43849', sans-serif" }}>Inventory</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <Projects />
      <Blogs />
    </div>
  );
};

export default Portfolio;
