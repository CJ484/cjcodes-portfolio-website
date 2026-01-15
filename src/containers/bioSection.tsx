import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function BioSection() {
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    const paragraphsLetters = SplitText.create(".bioSection__paragraph", {
      type: "chars",
    });

    gsap.fromTo(paragraphsLetters.chars,
      {
        opacity: 0,
        y: -500,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.01,
        scrollTrigger: {
          trigger: ".bioSection",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section id="bio" className="bioSection">
      <div className="container">
        <h2 className="sectionTitle">Get to know me</h2>
        <div className="bioSection__content">
          <p className="bioSection__paragraph">
            I am a <span className="highlight">Front-End Developer</span> with a
            unique dual-lens: the precision of a technical webmaster and the
            creative eye of a freehand artist.
          </p>
          <p className="bioSection__paragraph">
            My journey into tech began with a childhood curiosity sparked by
            shows like &quot;Code Lyoko&quot;, which evolved into a career
            dedicated to building and meticulously maintaining{" "}
            <span className="highlight">high performance web experiences</span>.
          </p>

          <p className="bioSection__paragraph">
            I've delivered websites for{" "}
            <span className="highlight">small businesses</span> and{" "}
            <span className="highlight">local churches</span> and{" "}
            <span className="highlight">startups</span>.
          </p>

          <p className="bioSection__paragraph">
            I have a natural aptitude for{" "}
            <span className="highlight">troubleshooting complex systems</span>{" "}
            and a <span className="highlight">'maintenance-first'</span>{" "}
            mindset. I have always been interested in technology and how it
            works. I am a very curious person and love to learn new things.
          </p>

          <p className="bioSection__paragraph">
            Let's Build something together! I'm ready to apply my curiosity and
            <span className="highlight">technical rigor</span> to help a team or
            business thrive. Contact me to get started.
          </p>
        </div>
      </div>
    </section>
  );
}
