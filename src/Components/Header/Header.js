import React from "react";
import "./header.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

function Header() {
  return (
    <div>
      <nav className="nav-app">
        <ul className="socialMedia">
          <li>
            <a
              href="https://www.facebook.com/Monty.Inna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/georgemalinov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/george-malinov-9a18a320a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <ul className="infoNav">
          <li>
            <a href="/About">ABOUT</a>
          </li>
          <li>
            <a href="/Resume">RESUME</a>
          </li>
          <li>
            <a href="/Contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
