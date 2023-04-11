import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <img src="../public/images/portrait.jpg" />
      <div className="container">
        <h2>Nelson Baguma</h2>
        <p>FrontEnd Developer</p>
        <a href="#">nelsonbaguma.io</a>
        <div className="flex">
          <a href="mailto:nelsonbaguma15@gmail.com">
            <i className="fa-regular fa-envelope"></i>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/baguma-nelson-a7bb94146/"
            target="new"
          >
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
