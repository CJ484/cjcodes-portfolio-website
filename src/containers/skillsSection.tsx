import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { skills } from "@/constant/skills";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !pathRef.current) return;

    const container = containerRef.current;
    const svg = pathRef.current;
    
    if (!svg) return;
    
    const pathElement = svg.querySelector("path");
    if (!pathElement) return;

    gsap.from(".skillsSection__content", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    
    // Get container dimensions
    const updateAnimation = () => {
      const rect = container.getBoundingClientRect();
      const containerWidth = rect.width || container.offsetWidth;
      const containerHeight = rect.height || container.offsetHeight;
      
      if (containerWidth === 0 || containerHeight === 0) return;
      
      // Responsive path dimensions - increased to create overflow effect
      let radiusX: number;
      let radiusY: number;
      let centerX: number;
      let centerY: number;
      
      if (window.innerWidth < 768) {
        // Mobile - path extends beyond container (increased by 25%)
        radiusX = containerWidth * 0.78125;
        radiusY = containerHeight * 0.625;
        centerX = containerWidth / 2;
        centerY = containerHeight / 2;
      } else if (window.innerWidth < 1024) {
        // Tablet - path extends beyond container
        radiusX = containerWidth * 0.45;
        radiusY = containerHeight * 0.45;
        centerX = containerWidth / 2;
        centerY = containerHeight / 2;
      } else {
        // Desktop - path extends beyond container
        radiusX = containerWidth * 0.4;
        radiusY = containerHeight * 0.45;
        centerX = containerWidth / 2;
        centerY = containerHeight / 2;
      }

      // Create elliptical path (closed loop)
      // Use path element directly for MotionPathPlugin
      const pathData = `M ${centerX + radiusX},${centerY} A ${radiusX},${radiusY} 0 1,1 ${centerX - radiusX},${centerY} A ${radiusX},${radiusY} 0 1,1 ${centerX + radiusX},${centerY} Z`;
      pathElement.setAttribute("d", pathData);
      svg.setAttribute("viewBox", `0 0 ${containerWidth} ${containerHeight}`);
      svg.setAttribute("width", containerWidth.toString());
      svg.setAttribute("height", containerHeight.toString());

      // Kill existing animations
      const items = container.querySelectorAll<HTMLElement>(".skills__item");
      gsap.killTweensOf(items);
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
        gsap.to(item, {
          motionPath: {
            path: pathData,
            autoRotate: true,
            start: startPosition,
            end: startPosition + 1,
          },
          duration: duration,
          ease: "none",
          repeat: -1,
        });
      });
    };

    // Wait for container to be ready
    const initAnimation = () => {
      if (containerRef.current?.offsetWidth && containerRef.current?.offsetHeight) {
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
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll<HTMLElement>(".skills__item");
        gsap.killTweensOf(items);
      }
    };
  }, []);

  return (
    <section id="skills" className="skillsSection">
      <div className="container">
        <div className="skillsSection__content">
          <h1 className="sectionTitle">Skills</h1>
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
            style={{ position: "absolute", width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}
          >
            <path
              fill="none"
              stroke="transparent"
              strokeWidth="2"
            />
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
