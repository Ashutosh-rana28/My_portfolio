
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "Offline AI Knowledge Capsule 🚀",
    category: "AI Project",
    desc: "AI-based system for providing education without internet in rural areas.",
    tools: "Python, Flask, AI Model",
    image: "/images/capsul.jpeg",
    github: "https://github.com/yourusername/tic-tac-toe",
    live: ""
  },
  {
    title: "Customer Feedback Analysis",
    category: "Web Project",
    desc: "Analyzes customer feedback and helps understand user satisfaction.",
    tools: "HTML, CSS, JavaScript",
    image: "/images/feedback.jpeg",
    github: "https://github.com/yourusername/tic-tac-toe",
    live: ""
  },
  {
    title: "3D Portfolio Website",
    category: "Web + 3D",
    desc: "Interactive portfolio using Three.js with animations and modern UI.",
    tools: "React, Three.js, GSAP",
    image: "/images/meh.jpeg",
    github: "https://github.com/yourusername/tic-tac-toe",
    live: ""
  },
  {
  title: "Tic Tac Toe Game",
  category: "Web Game",
  desc: "A simple interactive Tic Tac Toe game with logic-based gameplay and user-friendly UI.",
  tools: "HTML, CSS, JavaScript",
  image: "/images/tictactoe.jpeg",
  github: "https://github.com/Ashutosh-rana28/tic_tac_toe_game",
  live: "https://the-xo-challange.netlify.app/"
}
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                {/* 🔥 NEW DESCRIPTION */}
                <p className="work-desc">{project.desc}</p>

                <h4>Tools & Features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;