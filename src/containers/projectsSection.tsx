import { projects } from "@/constant/projects";
import { LuExternalLink } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProjectsSections() {
  useGSAP(() => {
    gsap.fromTo(".projects", {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".projectsSection",
        start: "top 50%",
        end: "bottom bottom",
        once: true,
      },
    });

  });

  return (
    <section id="projects" className="projectsSection">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="projects__content">
              <a href={project.link} className="projects__content__image__link" target="_blank" rel="noopener noreferrer">
                <img
                  className="projects__content__image"
                  src={project.image}
                  alt={project.name}
                />
              </a>
              <div className="projects__content__info">
                <h2 className="projects__content__name">{project.name}</h2>
                <p className="projects__content__description">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="projects__content__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <LuExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
