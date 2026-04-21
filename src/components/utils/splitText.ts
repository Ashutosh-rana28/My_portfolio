import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");

  paras.forEach((para: any) => {
    gsap.fromTo(
      para,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: para,
          start: "top 80%",
        },
      }
    );
  });

  titles.forEach((title: any) => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
        },
      }
    );
  });
}