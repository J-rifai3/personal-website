import ImageSlot from '../../components/ImageSlot.jsx'
import imagePaths from '../../content/imagePaths.js'

function CsHomePage() {
  return (
    <section className="page-card hero-page">
      <div>
        <p className="eyebrow">Welcome</p>
        <h1>A helluva computer scientist.</h1>
        <p className="lead">
          Hello! I&apos;m Jude Rifai, a Georgia Tech student passionate about software, machine learning, and robotics.
        </p>
        <a className="resume-download" href="/cs_resume.pdf" download>
          Download Resume
        </a>
      </div>
      <ImageSlot
        src={imagePaths.homeHero}
        alt="Portrait of you"
        className="hero-image"
        placeholderText="Add image: public/images/home-hero.jpg"
      />
    </section>
  )
}

export default CsHomePage
