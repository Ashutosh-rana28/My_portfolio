import gsap from "gsap";

export function initialFX() {
  
  document.body.style.overflowY = "auto";

  const main = document.getElementsByTagName("main")[0];
  if (main) {
    main.classList.add("main-active");
  }

  
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 0.3,
  });

 
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
    }
  );

 
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.6,
    }
  );

  
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      delay: 0.2,
    }
  );
}