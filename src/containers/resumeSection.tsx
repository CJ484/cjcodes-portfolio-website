import { LuExternalLink } from "react-icons/lu";

type EducationProps = {
  id: number;
  name: string;
  duration: string;
  description: string[];
};

type ExperienceProps = {
  id: number;
  name: string;
  duration: string;
  description: string[];
};

export default function ResumeSection() {
  const experience: ExperienceProps[] = [
    {
      id: 1,
      name: "Freelance",
      duration: "July 2024 - September 2025",
      description: [
        "I am a freelance web developer for a variety of clients. I created a website for them using React and Next.js.",
      ],
    },
    {
      id: 2,
      name: "Fast Line Safety Training",
      duration: "March 2021 - September 2025",
      description: [
        "I am a freelance web developer for Fast Line Safety Training. I created a website for them using React and Next.js.",
        "I also created a website for them using React and Next.js.",
      ],
    },
  ];
  const education: EducationProps[] = [
    {
      id: 1,
      name: "General Assembly",
      duration: "March 2023 - March 2024",
      description: [
        `Taught By <a href="https://github.com/michaeltomasik" target="_blank" rel="noopener noreferrer">Michał Tomasik</a> on how to be a better developer`,
      ],
    },
    {
      id: 2,
      name: "General Assembly",
      duration: "September 2021 - December 2021",
      description: [
        "I took a 3 month bootcamp to learn more about Javascript and React.",
      ],
    },
    {
      id: 3,
      name: "Codecademy",
      duration: "December 2020 - March 2021",
      description: [
        "I started my learning path by self teaching myself the basics of HTML, CSS, and Javascript.",
      ],
    },
    {
      id: 4,
      name: "Suffolk County Community College",
      duration: "August 2015 - January 2021",
      description: [
        "I received my Associates Degree in Liberal Arts and Sciences.",
      ],
    },
  ];
  return (
    <section id="resume" className="resumeSection">
      <div className="container">
        <h1>Resume</h1>
        <div className="resumeLink">
          <a className="resumeLink__link" href="/resume/pdf">
            View PDF Resume
            <LuExternalLink className="resumeLink__link__icon" />
          </a>
        </div>
        <div>
          <div className="experienceSection">
            <h2 className="sectionTitle">Experience</h2>
            {experience.map((item) => (
              <div key={item.id} className="experienceSection__item">
                <div className="experienceSection__item__header">
                  <h3 className="experienceSection__item__header__name">
                    {item.name}
                  </h3>
                  <span className="divider"></span>
                  <h4 className="experienceSection__item__header__duration">
                    {item.duration}
                  </h4>
                </div>
                <ul className="experienceSection__item__description">
                  {item.description.map((description, index) => (
                    <li
                      className="experienceSection__item__description__item"
                      key={`${item.id}-${index}`}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="educationSection">
            <h2 className="sectionTitle">Education</h2>
            {education.map((item) => (
              <div key={item.id} className="educationSection__item">
                <div className="educationSection__item__header">
                  <h3 className="educationSection__item__header__name">
                    {item.name}
                  </h3>
                  <span className="divider"></span>
                  <p className="educationSection__item__header__duration">
                    {item.duration}
                  </p>
                </div>
                <ul className="educationSection__item__description">
                  {item.description.map((description, index) => (
                    <li
                      className="educationSection__item__description__item"
                      key={`${item.id}-${index}`}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
