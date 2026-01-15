import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/not-found";
import { Header, Footer, SocialLinks, Navbar } from "./components";
import {
  IntroductionSection,
  BioSection,
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
    </div>
  );
}
