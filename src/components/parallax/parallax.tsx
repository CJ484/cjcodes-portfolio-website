import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './parallax.css';

gsap.registerPlugin(ScrollTrigger);

export default function Parallax({ children }: { children: React.ReactNode }) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!parallaxRef.current) return;

    gsap.to(parallaxRef.current, {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
        invalidateOnRefresh: true
      }
    });
  }, []);

  return (
    <div ref={parallaxRef} className="parallax">
      {children}
    </div>
  )
}