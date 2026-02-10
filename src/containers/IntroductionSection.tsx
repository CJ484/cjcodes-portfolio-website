import { SplineObject } from "@/components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function IntroductionSection() {

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".introductionSection__title", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
    tl.fromTo(".introductionSection__subtitle", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
  });
  
  return (
    <section id="introduction" className="introductionSection">
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
