import { projects } from "@/constant/projects";
import { LuExternalLink } from "react-icons/lu";
export default function ProjectsSections() {
  return (
    <section id="projects" className="projectsSection">
      <div className="container">
        <h1 className="sectionTitle">Projects</h1>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="projects__content">
              <img className="projects__content__image" src={project.image} alt={project.name} />

                <div className="projects__content__info">


                  <h2 className="projects__content__name">{project.name}</h2>
                  <p className="projects__content__description">{project.description}</p>
                  <a href={project.link} className="projects__content__link" target="_blank" rel="noopener noreferrer">View Project <LuExternalLink /></a>
                  </div>
                  </div>
          ))}
        </div>
      </div>
    </section>
  );
}
