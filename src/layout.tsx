import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/not-found";
import { Header, Footer, SocialLinks, Navbar } from "./components";
import {
  IntroductionSection,
  BioSection,
  ResumeSection,
  ProjectsSection,
  GitHubSection,
  SkillsSection,
} from "./containers";
import "@/styles/styles.css";

function Home() {
  return (
    <main className="mainContainer">
      <IntroductionSection />
      <BioSection />
      <SkillsSection />
      <ResumeSection />
      <ProjectsSection />
      <GitHubSection />
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
