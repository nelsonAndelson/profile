import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="flex">
      <i className="fa-brands fa-square-twitter"></i>
      <i className="fa-brands fa-square-facebook"></i>

      <a href="https://www.instagram.com/nelli.son_/" target="blank">
        <i className="fa-brands fa-square-instagram"></i>
      </a>
      <i className="fa-brands fa-square-github"></i>
    </footer>
  );
}
