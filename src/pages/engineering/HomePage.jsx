import ImageSlot from '../../components/ImageSlot.jsx'
import imagePaths from '../../content/imagePaths.js'

function EngineeringHomePage() {
  return (
    <section className="page-card hero-page">
      <div>
        <p className="eyebrow">Welcome</p>
        <h1>A helluva engineer.</h1>
        <p className="lead">
          Hello! I&apos;m Jude Rifai, a mechanical engineer at Georgia Tech passionate about
          rocketry and aerospace.
        </p>
        <a className="resume-download" href="/engineering_resume.pdf" download>
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

export default EngineeringHomePage
