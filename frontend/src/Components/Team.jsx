import React from "react";
import "../styles/Team.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "./Navbar";
import aditya_img from "../assets/aditya_img.jpg";
import arsh_img from "../assets/arsh_img.jpg";
import parv_img from "../assets/parv_img.jpg";
import aryan_img from "../assets/aryan_img.jpg";

const Team = ({ theme, settheme }) => {
  return (
    <>
      <Navbar theme={theme} settheme={settheme} />
      <section
        className={`absolute w-full mt-20 h-full ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="row">
          <h1
            className={`font-extrabold text-4xl md:text-5xl pt-1 ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Our Team
          </h1>
        </div>
        <div className="row">
          <div className="column border rounded-lg">
            <div
              className={`card ${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div className="img-container">
                <img src={aryan_img} />
              </div>
              <h3>Aryan Kaushik</h3>
              <p>Front-End Designer</p>
              <div className="icons">
                <a href="https://www.linkedin.com/in/aryan-kaushik-087930260/">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/aryankaushik5565">
                  <GitHubIcon />
                </a>
                <a href="mailto:@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you.">
                  <EmailIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="column border rounded-lg">
            <div
              className={`card ${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div className="img-container">
                <img src={aditya_img} />
              </div>
              <h3>Aditya Sharma</h3>
              <p>Front-End Designer</p>
              <div className="icons">
                <a href="https://www.linkedin.com/in/aditya-sharma-651084253/">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/Adityasharma2905">
                  <GitHubIcon />
                </a>
                <a href="mailto:adityasharma.as02@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you.">
                  <EmailIcon />
                </a>
                <a href="https://www.instagram.com/adityasharma_.04/">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="column border rounded-lg">
            <div
              className={`card ${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div className="img-container">
                <img src={parv_img} />
              </div>
              <h3>Parv Sharma</h3>
              <p>Back-End Designer</p>
              <div className="icons">
                <a href="https://www.linkedin.com/in/parv-sharma-470498259/">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/Parvsharma04">
                  <GitHubIcon />
                </a>
                <a href="mailto:sharmaparv.2004@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you.">
                  <EmailIcon />
                </a>
                <a href="https://www.instagram.com/parv04/">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="column border rounded-lg">
            <div
              className={`card ${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div className="img-container">
                <img src={arsh_img} />
              </div>
              <h3>Arshdeep</h3>
              <p>Back-End Designer</p>
              <div className="icons">
                <a href="https://www.linkedin.com/in/arshdeeprooprai">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/Arshdeep-13">
                  <GitHubIcon />
                </a>
                <a href="mailto:arshdeeprooprai@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you.">
                  <EmailIcon />
                </a>
                <a href="https://www.instagram.com/arshdeep_1315/">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
