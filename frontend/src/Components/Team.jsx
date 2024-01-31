import React from "react";
import "../styles/Team.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";


const Team = () => {
  return (
    <div>
      <section>
        <div className="row">
          <h1>Our Team</h1>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src="./aryan2.jpg" />
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
                <img src="./aditya.jpeg" />
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
                <img src="./parv.png" />
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
                <img src="./arshdeep4.jpg" />
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
      

    </div>
  );
};

export default Team;
