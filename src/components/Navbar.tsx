import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";

import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        e.preventDefault();
        let target = element.getAttribute("data-href");

        if (target) {
          document.querySelector(target)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        
        
        <a href="/#" className="navbar-title">
          <b><b>Ashu</b></b>
        </a>

       
        <a href="mailto:ashu282507@gmail.com" className="navbar-connect">
          ashu282507@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li>
            <a href="/ashutosh.Resume.pdf" target="_blank">
            <HoverLinks text="RESUME" />
            </a>
         </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
