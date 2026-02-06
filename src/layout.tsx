import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/not-found";
import { Header, Footer, SocialLinks, Navbar, Background, Parallax } from "./components";
import {
  IntroductionSection,
  BioSection,
  SeoSection,
  ResumeSection,
  ProjectsSection,
  SkillsSection,
} from "./containers";
import "@/styles/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <main className="mainContainer">
      <IntroductionSection />
      <BioSection />
      <SeoSection />
      <SkillsSection />
      <ResumeSection />
      <ProjectsSection />
    </main>
  );
}

export default function Layout() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <SocialLinks />
      <Navbar />
      <Parallax>
        <Background baseColor="#efefef" activeColor="#7159c1" dotSize={5} gap={32} proximity={150} speedTrigger={100} shockRadius={250} shockStrength={5} maxSpeed={5000} resistance={750} returnDuration={1.5} />
      </Parallax>
    </div>
  );
}
