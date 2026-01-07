import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "@/styles/not-found.css";

export default function NotFound() {
  useGSAP(() => {
    gsap.fromTo(".notFoundContainer__content", {
      opacity: 0,
      scale: 0.8,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.25,
    });
    gsap.fromTo(".notFoundContainer__animation", {
      opacity: 0,
      scale: 0.8,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.5,
    });
  });
  return (
    <div className="notFoundContainer">
      <div className="notFoundContainer__content">
        <div className="notFoundContainer__glassCard">
          <div className="notFoundContainer__contentInner">
            <h3 className="notFoundContainer__errorCode">Error 404</h3>
            <h1 className="notFoundContainer__title">Oops! Page Not Found</h1>
            <h2 className="notFoundContainer__subtitle">
              The page you are looking for does not exist
            </h2>
            <a className="notFoundContainer__button" href="/">
              Go to Home
            </a>
          </div>
        </div>
      </div>
      <div className="notFoundContainer__animation">
        <DotLottieReact
          src="/lotties/notFoundAnimation.json"
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
}
