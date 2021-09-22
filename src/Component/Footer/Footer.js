import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import pinterest from "../../images/pinterest.svg";
import emailIcon from "../../images/email.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__media-links">
        <ul className="media-links__ul">
          <li className="media-links__li">
            <a href="/#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li className="media-links__li">
            <a href="/#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li className="media-links__li">
            <a href="/#">
              <img src={pinterest} alt="pinterest" />
            </a>
          </li>
          <li className="media-links__li">
            <a href="/#">
              <img src={emailIcon} alt="email" />
            </a>
          </li>
        </ul>
      </section>

      <section className="footer__personal-contact">
        <ul className="personal-contact__ul">
          <li className="personal-contact__ul__li">
            <h4>Phone: XXXXXX</h4>
          </li>
          <li className="personal-contact__ul__li">
            <h4>Email: XXXXX@gmail.com</h4>
          </li>
        </ul>
      </section>

      <section className="footer__company-info-container">
        <div className="company-info-container__info">
          <h3>XXXX</h3>
          <h4>Copyright © 2021</h4>
          <h4>NY</h4>
        </div>
        <div className="company-info-container__home">
          <Link className="home__link" to="/home">
            Home
          </Link>
        </div>
        <div className="company-info-container__portfolio">
          <Link className="portfolio__link" to="/portfolio">
            Portfolio
          </Link>
          <ul className="portfolio__ul">
            <li className="portfolio__ul__li">
              <a href="/#" alt="project1-link">
                Project 1
              </a>
            </li>
            <li className="portfolio__ul__li">
              <a href="/#" alt="project2-link">
                Project 2
              </a>
            </li>
            <li className="portfolio__ul__li">
              <a href="/#" alt="project3-link">
                Project 3
              </a>
            </li>
            <li className="portfolio__ul__li">
              <a href="/#" alt="see-all">
                See All
              </a>
            </li>
          </ul>
        </div>
        <div className="company-info-container__resume">
          <a className="resume__link" href="/#" alt="resume">
            Resume
          </a>
          <a className="resume__link" href="/#" alt="download">
            Download
          </a>
        </div>
        <div className="company-info-container__contact">
          <a className="contact__link" href="/#" alt="contact">
            Contact
          </a>
        </div>
      </section>
    </footer>
  );
}
