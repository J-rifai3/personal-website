import ImageSlot from '../../components/ImageSlot.jsx'
import imagePaths from '../../content/imagePaths.js'

function CsAboutPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">About</p>
      <h2>A little about me.</h2>
      <p className="lead">
        - Originally from Chattanooga
        <br />
        - Valedictorian of my high school
        <br />
        - Teaching Assistant for CS 1332 (Data Structures and Algorithms)
        <br />
        - Done work in YJSP Rocket Club's avionics team
        <br />
        - Completed many personal projects in robotics and software
        <br />
        <br />
        I love to climb, play guitar and piano, lift, and hang out with friends!
      </p>
      <div className="split-content">
        <ImageSlot
          src={imagePaths.aboutPortraitCs}
          alt="About section portrait"
          placeholderText="Add image: public/images/about-portrait-cs.jpg"
        />
      </div>
    </section>
  )
}

export default CsAboutPage
