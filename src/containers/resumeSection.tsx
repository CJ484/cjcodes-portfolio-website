import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LuExternalLink } from "react-icons/lu";
import { SplitText } from "gsap/SplitText";

type EducationProps = {
  id: number;
  school: string;
  method: string;
  duration: string;
  description: string[];
};

type ExperienceProps = {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string[];
};

export default function ResumeSection() {
  gsap.registerPlugin(SplitText);

  const experience: ExperienceProps[] = [
    {
      id: 3,
      company: "Accoric",
      role: "Frontend Developer",
      duration: "March 2021 - September 2025",
      description: [
        "Architected and deployed a full-scale web presence from the ground up using React, Next.js, and TypeScript.",
        "Engineered high-conversion landing pages to support a successful pre-launch strategy for the company's mobile application.",
        "Collaborated on brand growth by integrating social media content strategies that directly increased user engagement and reach.",
      ],
    },
    {
      id: 2,
      company: "Fast Line Safety Training",
      role: "SEO Specialist & Web Developer",
      duration: "March 2021 - September 2025",
      description: [
        "Optimized website performance by improving Core Web Vitals, resulting in faster load times and an enhanced user experience.",
        "Implemented SEO best practices and technical audits that increased organic search visibility and site traffic.",
        "Streamlined client operations by designing professional, reusable document templates and brand assets.",
      ],
    },
    {
      id: 1,
      company: "CJ Codes",
      role: "Freelance Web Developer",
      duration: "July 2024 - Current",
      description: [
        "Consult with diverse clients to transform business requirements into responsive, high-performance web applications using Next.js.",
        "Develop clean, maintainable, and scalable codebases while adhering to industry-standard security and accessibility (WCAG) protocols.",
        "Manage the full project lifecycle from initial Figma wireframing to deployment and post-launch maintenance.",
      ],
    },
  ];
  const education: EducationProps[] = [
    {
      id: 1,
      school: "Private Mentor",
      method: "Online",
      duration: "March 2023 - March 2024",
      description: [
        `Mentored by <a href="https://github.com/michaeltomasik" target="_blank" rel="noopener noreferrer">Michał Tomasik</a> to master enterprise-level development workflows.`,
        "Focused on advanced topics including API integration, scalable folder architecture, and internationalization (i18n).",
        "Utilized industry-standard tools like Figma for design-to-code handoffs and Slack for asynchronous team communication.",
      ],
    },
    {
      id: 2,
      school: "General Assembly",
      method: "Online",
      duration: "September 2021 - December 2021",
      description: [
        "3 month bootcamp to learn more about the fundamentals of Javascript and React.",
        "Projects I worked on were a CRUD Todo List App, Online Firebase Chatbot, and a Recipe App connected to an API.",
      ],
    },
    {
      id: 3,
      school: "Codecademy",
      method: "Online",
      duration: "December 2020 - March 2021",
      description: [
        "Started my learning path by self teaching myself the basics of HTML, CSS, Javascript, Git, and GitHub.",
        "Reading books and watching online tutorials to learn more about the basics of programming.",
      ],
    },
    {
      id: 4,
      school: "Suffolk County Community College",
      method: "In-Person",
      duration: "August 2015 - January 2021",
      description: [
        "I received my Associates Degree in Liberal Arts and Sciences.",
        "Took a variety of courses that helped me develop my critical thinking and problem-solving skills. including coursework in Computer Science, Mathematics, and Problem Solving.",
      ],
    },
  ];

  useGSAP(() => {
    SplitText.create(".experienceSection__title", {
      type: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit(self) {
        gsap.fromTo(self.chars, {
          opacity: 0,
          y: -100,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".experienceSection",
            start: "top 50%",
            end: "bottom bottom",
            once: true,
          },
        });
      },
      onComplete(self: Array<HTMLHeadingElement>) {
        self.forEach((title) => {
          gsap.killTweensOf(title);
        });
      }
    });
    SplitText.create(".educationSection__title", {
      type: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit(self) {
        gsap.fromTo(self.chars, {
          opacity: 0,
          y: -100,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".educationSection",
            start: "top 50%",
            end: "bottom bottom",
            once: true,
          },
        });
      },
    });

    gsap.fromTo(
      ".experienceSection__item",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".experienceSection",
          start: "top 50%",
          end: "bottom bottom",
          once: true
        },
      }
    );

    gsap.fromTo(
      ".educationSection__item",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".educationSection",
          start: "top 50%",
          end: "bottom bottom",
          once: true
        },
      }
    );
    gsap.fromTo(
      ".resumeLink__link",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".experienceSection",
          start: "top 80%",
          end: "bottom bottom",
          once: true
        },
      }
    );
  });

  return (
    <section id="resume" className="resumeSection">
      <div className="container">
        <div className="resumeSection__content">
          <div className="resumeSection__header">
            <h2 className="sectionTitle">Resume</h2>
          </div>
          <div className="experienceSection">
            <h3 className="experienceSection__title">Experience</h3>
            {experience.map((item) => (
              <div key={item.id} className="experienceSection__item">
                <div className="experienceSection__item__header">
                  <div className="experienceSection__item__header__name__container">
                    <h4 className="experienceSection__item__header__name">
                      {item.role}
                    </h4>
                    <h3 className="experienceSection__item__header__sideInfo">
                      {item.company}
                    </h3>
                  </div>
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
            <h3 className="educationSection__title">Education</h3>
            {education.map((item) => (
              <div key={item.id} className="educationSection__item">
                <div className="educationSection__item__header">
                  <div className="educationSection__item__header__name__container">
                    <h4 className="educationSection__item__header__name">
                      {item.school}
                    </h4>
                    <h3 className="educationSection__item__header__sideInfo">
                      {item.method}
                    </h3>
                  </div>
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

          <a
            className="resumeLink__link"
            href="https://docs.google.com/document/d/1Jxc2VQ64EsG2RAAKvZBG4zuN8lFK2JEQS6Jixa-ZT6Q/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to my Resume
            <LuExternalLink className="resumeLink__link__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
