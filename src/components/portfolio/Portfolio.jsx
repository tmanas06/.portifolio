import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "speech to text application on python and google cloud",
    img: "https://codelabs.developers.google.com/static/codelabs/cloud-speech-text-python3/img/9e7124a578332fed.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://example.com/project1", // Example link, replace with actual project URL
  },
  {
    id: 2,
    title: "Shopping e-commerce apllication",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZIMuFIbiVBDd6BjeDM4a2ApAGBgGxXi6GwEL5V3zlu0vGNgllZ52ZhKA56h-wqd36Tk&usqp=CAU",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "weather application on cli and web",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJHWwFJPrlJ4XeAdpPP5iWz4iwj4QCYwfzg&s",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: " Static image application in flutter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUmuwZfH6oislpSYTw8StsD1hpszsaLIyiQ&s",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 5,
    title: "Music application with integrated chat feature using MERN stack",
    img: "https://media.licdn.com/dms/image/D4E22AQFwsEC-KhvOSw/feedshare-shrink_1280/0/1714015692306?e=1721260800&v=beta&t=64oVsV0VCiuMcgxBA7ex-e-REf3uTo0d69RkLW5sAX8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 6,
    title: " Flight Ticketing Application using NFT (Current Focus)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSan_m1V52Upb6do4M_APg8LNLC-pUIFek7lA&s",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 7,
    title: "DEEP DIVE INTO COSMWASM CONTRACT STANDARDS: CW20, CW721, CW4, AND CW3",
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEjr1mnzxV7JwmVFbIpTcrMaVGyHqo1y6i8ZJ5-XumXalUlPni-tqGll00s0T8zfJdwRboqhN5eBDHJwDXjG6QASix71TTw_u-6MAg1A3-PzcrRwtnNV6gOnoG-GTG6789dMnKNLsEMErgEUtSL-dg4htAG7pepjCa6LYtk-i32KAtJCUa8jY59cLVnHylE",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 8,
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
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Check this out</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
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
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
