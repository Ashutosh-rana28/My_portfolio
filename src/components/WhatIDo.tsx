import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          M<span className="hat-h2">Y</span>
          <div>
            S<span className="do-h2">KILLS</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-content-in">
              
              <h3>WEB DEVELOPMENT</h3>
              <h4>Description</h4>
              <p>
                Building responsive websites using HTML, CSS and JavaScript.
                Focused on clean UI, layout design and improving frontend skills.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Responsive Design</div>
              </div>

          

              <div className="what-arrow"></div>
            </div>
          </div>

          
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-content-in">

              <h3>JAVA & PROGRAMMING</h3>
              <h4>Description</h4>
              <p>
                Learning Java and improving programming logic step by step.
                Practicing problem solving and core concepts.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">OOP Basics</div>
                <div className="what-tags">Logic Building</div>
              </div>

              
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}