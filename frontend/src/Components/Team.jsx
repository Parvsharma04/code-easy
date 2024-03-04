import React from "react";
import "../styles/Team.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "./Navbar"
import aditya_img from "../assets/aditya_img.jpg"
import arsh_img from "../assets/arsh_img.jpg"
import parv_img from "../assets/parv_img.jpg"
import aryan_img from "../assets/aryan_img.jpg"

const Team = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="row">
          <h1 className="font-extrabold text-5xl pt-1">Our Team</h1>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src={aryan_img} />
              </div>
              <h3>Aryan Kaushik</h3>
              <p>Front-End Designer</p>
              <div className="icons">
                <a href="">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <GitHubIcon />
                </a>
                <a href="">
                  <EmailIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src={aditya_img} />
              </div>
              <h3>Aditya Sharma</h3>
              <p>Front-End Designer</p>
              <div className="icons">
              <a href="">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <GitHubIcon />
                </a>
                <a href="">
                  <EmailIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src={parv_img} />
              </div>
              <h3>Parv Sharma</h3>
              <p>Back-End Designer</p>
              <div className="icons">
              <a href="">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <GitHubIcon />
                </a>
                <a href="">
                  <EmailIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src={arsh_img} />
              </div>
              <h3>Arshdeep</h3>
              <p>Back-End Designer</p>
              <div className="icons">
              <a href="">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <GitHubIcon />
                </a>
                <a href="">
                  <EmailIcon />
                </a>
                <a href="">
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
