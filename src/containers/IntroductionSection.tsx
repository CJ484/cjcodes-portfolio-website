export default function IntroductionSection() {
  return (
    <section id="introduction" className="introductionSection">
      <div className="container">
        <div className="introductionSection__content">
          <img
            className="introductionSection__logo"
            src="/images/myImage.jpg"
            alt="Logo"
          />
          <h1 className="introductionSection__title">
            Hi, I&apos;m Carlos Coreas & I am a <br />
            <span className="highlight">Full Stack &lt;Web&gt; Developer</span>👨‍💻
          </h1>
        </div>
      </div>
    </section>
  );
}
