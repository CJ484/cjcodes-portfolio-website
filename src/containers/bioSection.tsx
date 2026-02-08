import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, ScrollTrigger } from "gsap/all";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { SiBuymeacoffee } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function BioSection() {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom 20%",
        once: true,
      },
    });
    const bentoAnimationDuration = 0.25;
    const bentoAnimationEase = "elastic.out(1.5, 0.3)";

    tl.fromTo(".bioSection__imageContainer", {
      opacity: 0,
      x: -200,
    }, {
      opacity: 1,
      x: 0,
      duration: bentoAnimationDuration,
      ease: bentoAnimationEase,
    });
    tl.fromTo(".bioSection__text", {
      opacity: 0,
      y: -100,
    }, {
      opacity: 1,
      y: 0,
      duration: bentoAnimationDuration,
      ease: bentoAnimationEase,
    });
    tl.fromTo(".bioSection__paragraphContainer--0", {
      opacity: 0,
      y: -500,
    }, {
      opacity: 1,
      y: 0,
      duration: bentoAnimationDuration,
      ease: bentoAnimationEase,
    });
    tl.fromTo(".bioSection__paragraphContainer--1", {
      opacity: 0,
      x: 500,
    }, {
      opacity: 1,
      x: 0,
      duration: bentoAnimationDuration,
      ease: bentoAnimationEase,
    });
    tl.fromTo(".bioSection__paragraphContainer--2", {
      opacity: 0,
      y: 500,
    }, {
      opacity: 1,
      y: 0,
      duration: bentoAnimationDuration,
      ease: bentoAnimationEase,
    });
    tl.fromTo(".bioSection__coffeeIcon", {
      x: -500,
    }, {
      x: 0,
      duration: bentoAnimationDuration,
      ease: bentoAnimationEase,
    });
    tl.fromTo(".bioSection__reactIcon", {
      x: -500,
    }, {
      x: 0,
      duration: bentoAnimationDuration,
      ease: bentoAnimationEase,
    });
    tl.fromTo(".bioSection__animationContainer", {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: bentoAnimationDuration,
      ease: bentoAnimationEase,
    });
  });

  return (
    <section ref={containerRef} id="bio" className="bioSection">
      <div className="container">
        <h2 className="sectionTitle">Get to know me</h2>
        <div className="bioSection__content">
          <div className="bioSection__imageContainer">
            <img
              src="/images/myImage.jpg"
              alt="Bio"
              className="bioSection__image"
            />
          </div>
          <div className="bioSection__paragraphContainer bioSection__paragraphContainer--0">
            <p className="bioSection__paragraph">
              I am a <span className="highlight">Front-End Developer</span> with
              a dual approach: the precision of a technical webmaster and the
              creative eye of a freehand artist.
            </p>
            <p className="bioSection__paragraph">
              My journey into tech began with a childhood curiosity sparked by
              shows like &quot;Code Lyoko&quot;, which evolved into a career
              dedicated to building and meticulously maintaining{" "}
              <span className="highlight">
                high performance web experiences
              </span>
              .
            </p>
          </div>
          <div className="bioSection__text">
            <b>Intereactive Web Designer</b>
          </div>
          <div className="bioSection__paragraphContainer bioSection__paragraphContainer--1">

            <p className="bioSection__paragraph">
              I have a natural aptitude for{" "}
              <span className="highlight">troubleshooting complex systems</span>{" "}
              and a <span className="highlight">'maintenance-first'</span>{" "}
              mindset. I have always been interested in technology and how it
              works. I am a very curious person and love to learn new things.
            </p>
            <p className="bioSection__paragraph">
            </p>
          </div>
          <div className="bioSection__coffeeIcon">
            <SiBuymeacoffee /> Coffee Lover!
          </div>
          <div className="bioSection__reactIcon">
            <FaReact /> React Developer
          </div>
          <div className="bioSection__paragraphContainer bioSection__paragraphContainer--2">
            <p className="bioSection__paragraph">
              I've delivered websites for{" "}
              <span className="highlight">small businesses</span> and{" "}
              <span className="highlight">local church</span> and{" "}
              <span className="highlight">startups</span>.
            </p>
            <p className="bioSection__paragraph">
              Let's Build something together! I'm ready to apply my curiosity
              and
              <span className="highlight">technical rigor</span> to help a team
              or business thrive. Contact me to get started.
            </p>
            <p className="bioSection__paragraph">
            </p>
          </div>

          <div className="bioSection__animationContainer">
            <DotLottieReact
              src="/lotties/webDevelopmentAnimation.json"
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
