import { SplineObject } from "@/components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function IntroductionSection() {
  gsap.registerPlugin(SplitText);

  const accentText = [
    "UX Designer",
    "Flow",
    "Animations",
    "Speed",
    "Responsive",
    "Lottie",
    "Visual Design",
    "Interactions",
    "Accessibility",
    "Fluid",
    "Design",
    "Development",
    "UI/UX",
    "Web Development",
    "Frontend Development",
    "Web Design",
    "Web Development",
    "3D Design",
    "Spline",
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    // const elements = gsap.utils.toArray<HTMLElement>(".introductionSection__accentText");
    // const splits = elements.map((el) => 
    //   SplitText.create(el, {
    //     type: "words",
    //     autoSplit: true,
    //   })
    // );
    // const allWords = splits.flatMap((split) => split.words);

    tl.fromTo(
      ".introductionSection__title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      },
    );
    tl.fromTo(
      ".introductionSection__subtitle",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      },
    );

    gsap.to(".introductionSection__accentTextContainer__inner-1", {
      x: "25%",
      duration: 50,
      delay: 0.5,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });

    gsap.to(".introductionSection__accentTextContainer__inner-2", {
      x: "-25%",
      duration: 50,
      delay: 0.5,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });
  });

  return (
    <section id="introduction" className="introductionSection">
      <div className="introductionSection__accentTextContainer">
        <div className="introductionSection__accentTextContainer__inner-1">
          {accentText
            .slice(accentText.length / 2, accentText.length)
            .map((text, index) => (
              <span key={index} className="introductionSection__accentText">
                {text}
              </span>
            ))}
        </div>
        <div className="introductionSection__accentTextContainer__inner-2">
          {accentText.slice(0, accentText.length / 2).map((text, index) => (
            <span key={index} className="introductionSection__accentText">
              {text}
            </span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="introductionSection__content">
          <h1 className="introductionSection__title">
            Hello, I&apos;m Carlos Coreas
          </h1>
          <SplineObject className="introductionSection__splineObject" />
          <h2 className="introductionSection__subtitle">
            Full Stack &lt;Web&gt; Developer👨‍💻
          </h2>
        </div>
      </div>
    </section>
  );
}
