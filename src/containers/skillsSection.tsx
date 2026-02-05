import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { skills } from "@/constant/skills";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !pathRef.current) return;

    const container = containerRef.current;
    const svg = pathRef.current;
    let orbitTweens: gsap.core.Tween[] = [];
    let orbitTrigger: ScrollTrigger | null = null;

    if (!svg) return;

    const pathElement = svg.querySelector("path");
    if (!pathElement) return;

    gsap.fromTo(
      ".skillsSection__content",
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".skillsSection",
          start: "top 50%",
          end: "bottom 20%",
          once: true,
        },
      }
    );

    const updateAnimation = () => {
      const rect = container.getBoundingClientRect();
      const containerWidth = rect.width || container.offsetWidth;
      const containerHeight = rect.height || container.offsetHeight;

      if (containerWidth === 0 || containerHeight === 0) return;

      let radiusX: number;
      let radiusY: number;
      let centerX: number;
      let centerY: number;

      if (window.innerWidth < 768) {
        // Mobile radius and center
        radiusX = containerWidth * 0.7;
        radiusY = containerHeight * 0.5;
        centerX = containerWidth / 2;
        centerY = containerHeight / 2;
      } else if (window.innerWidth < 1024) {
        // Tablet radius and center
        radiusX = containerWidth * 0.45;
        radiusY = containerHeight * 0.45;
        centerX = containerWidth / 2;
        centerY = containerHeight / 2;
      } else {
        // Desktop radius and center
        radiusX = containerWidth * 0.35;
        radiusY = containerHeight * 0.75;
        centerX = containerWidth / 2;
        centerY = containerHeight / 2;
      }

      // Create elliptical path (closed loop)
      // Use path element directly for MotionPathPlugin
      const pathData = `M ${
        centerX + radiusX
      },${centerY} A ${radiusX},${radiusY} 0 1,1 ${
        centerX - radiusX
      },${centerY} A ${radiusX},${radiusY} 0 1,1 ${
        centerX + radiusX
      },${centerY} Z`;
      pathElement.setAttribute("d", pathData);
      svg.setAttribute("viewBox", `0 0 ${containerWidth} ${containerHeight}`);
      svg.setAttribute("width", containerWidth.toString());
      svg.setAttribute("height", containerHeight.toString());

      // Kill existing animations
      const items = container.querySelectorAll<HTMLElement>(".skills__item");
      gsap.killTweensOf(items);
      orbitTweens.forEach((tween) => tween.kill());
      orbitTweens = [];
      if (orbitTrigger) {
        orbitTrigger.kill();
        orbitTrigger = null;
      }
      const totalItems = items.length;
      const duration = 20; // Time for one complete loop

      items.forEach((item, index) => {
        // Calculate starting position (distributed evenly around the loop)
        const startPosition = index / totalItems;

        // Reset any existing transforms
        gsap.set(item, {
          x: 0,
          y: 0,
          rotation: 0,
          xPercent: -50,
          yPercent: -50,
        });

        // Set initial position using path string - this ensures proper coordinate system
        gsap.set(item, {
          motionPath: {
            path: pathData,
            autoRotate: true,
            start: startPosition,
            end: startPosition,
          },
        });

        // Create infinite loop animation - animate from start to start+1 (full loop)
        const tween = gsap.to(item, {
          motionPath: {
            path: pathData,
            autoRotate: true,
            start: startPosition,
            end: startPosition + 1,
          },
          duration: duration,
          ease: "none",
          repeat: -1,
          paused: true,
        });
        orbitTweens.push(tween);
      });

      orbitTrigger = ScrollTrigger.create({
        trigger: ".skillsSection",
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => orbitTweens.forEach((tween) => tween.play()),
        onEnterBack: () => orbitTweens.forEach((tween) => tween.play()),
        onLeave: () => orbitTweens.forEach((tween) => tween.pause()),
        onLeaveBack: () => orbitTweens.forEach((tween) => tween.pause()),
      });

      orbitTrigger.refresh();
      if (orbitTrigger.isActive) {
        orbitTweens.forEach((tween) => tween.play());
      }
    };

    // Wait for container to be ready
    const initAnimation = () => {
      if (
        containerRef.current?.offsetWidth &&
        containerRef.current?.offsetHeight
      ) {
        updateAnimation();
      } else {
        setTimeout(initAnimation, 50);
      }
    };

    // Initial setup
    initAnimation();

    // Update on resize
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateAnimation, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      orbitTweens.forEach((tween) => tween.kill());
      orbitTweens = [];
      if (orbitTrigger) {
        orbitTrigger.kill();
        orbitTrigger = null;
      }
      if (containerRef.current) {
        const items =
          containerRef.current.querySelectorAll<HTMLElement>(".skills__item");
        gsap.killTweensOf(items);
      }
    };
  }, []);

  return (
    <section id="skills" className="skillsSection">
      <div className="container">
        <div className="skillsSection__content">
          <h1 className="sectionTitle">My tech stack</h1>
          <p className="skillsSection__content__description">
            My tech stack is focused on building custom web applications, but
            I'm equally comfortable working with WordPress, Webflow, and similar
            site builders. I'm also skilled in SEO optimization—identifying
            keyword opportunities and optimizing images for better performance
            and search visibility.
          </p>
        </div>
        <div ref={containerRef} className="skillsSection__animation">
          <svg
            ref={pathRef}
            className="skillsSection__path"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <path fill="none" stroke="transparent" strokeWidth="2" />
          </svg>
          {skills.map((skill) => (
            <div key={skill.name} className="skills__item glassmorphism">
              <img
                className="skills__item__image"
                src={skill.image}
                alt={skill.name}
              />
              <p className="skills__item__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
