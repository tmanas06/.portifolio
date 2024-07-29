import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMedium, FaBlogger, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import "./contact.scss";

// Define your motion variants
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

// Styled component for icon with hover effect
const StyledIcon = styled(motion.a)`
  transition: transform 0.3s ease; /* Adding transition for smooth animation */
  cursor: pointer; /* Ensure the cursor changes to pointer on hover */
  color: rgb(162, 255, 0); /* Icon color */
  font-size: 2rem; /* Icon size */
  position: relative; /* Ensure relative positioning for tooltips */

  &:hover {
    transform: scale(1.2); /* Enlarge the icon on hover */
  }

  /* Tooltip styling */
  &:hover::before {
    content: attr(title);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    font-size: 2rem;
    top: 100%; /* Position below the icon */
    left: 50%; /* Centered horizontally */
    transform: translateX(-50%);
    white-space: nowrap;
    opacity: 0; /* Hidden by default */
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1; /* Show tooltip on hover */
  }
`;


const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      animate="animate"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <motion.h1 variants={variants}>Get&nbsp;&nbsp;&nbsp;in&nbsp;&nbsp;&nbsp;touch</motion.h1>
      <motion.div className="icons" variants={variants}>
        {/* Wrap each icon with the StyledIcon component */}
        <StyledIcon href="mailto:hello@react.dev" className="icon" variants={variants} title="221003003cse@gmail.com">
          <FaEnvelope />
        </StyledIcon>
        <StyledIcon href="https://www.linkedin.com/in/t-manas-chakravarty-91958224b/" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="t-manas-chakravarty-91958224b">
          <FaLinkedin />
        </StyledIcon>
        <StyledIcon href="https://medium.com/@2210030003cse" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="2210030003cse">
          <FaMedium />
        </StyledIcon>
        <StyledIcon href="https://techieresearch.blogspot.com/" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="techieresearch">
          <FaBlogger />
        </StyledIcon>
        <StyledIcon href="https://x.com/tmanas2004" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="tmanas2004">
          <FaTwitter />
        </StyledIcon>
        <StyledIcon href="https://www.instagram.com/tmanas2004/" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="tmanas2004">
          <FaInstagram />
        </StyledIcon>
        <StyledIcon href="https://t.me/tmanas" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="@tmanas">
          <FaTelegram />
        </StyledIcon>
      </motion.div>
      </motion.div>
  );
};

export default Contact;
