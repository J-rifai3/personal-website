import ImageSlot from '../../components/ImageSlot.jsx'
import imagePaths from '../../content/imagePaths.js'

function EngineeringAboutPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">About</p>
      <h2>A little about me.</h2>
      <p className="lead">
        Originally from Chattanooga, TN, my passion for rocketry and aerospace was sparked by a
        love for space and the unknown. Visiting the Kennedy Space Center in Florida during my
        high school years was a life-changing experience that solidified my desire to pursue a
        career in the aerospace industry.
        <br />
        <br />
        Besides that, I love to climb, play guitar and piano, lift, and hang out with friends!
      </p>
      <div className="split-content">
        <ImageSlot
          src={imagePaths.aboutPortrait}
          alt="About section portrait"
          placeholderText="Add image: public/images/about-portrait.jpg"
        />
        <div className="detail-list">
          <p>
            <strong>Focus:</strong> Design, Analysis, and Testing
          </p>
          <p>
            <strong>Approach:</strong> Team-oriented and efficient problem-solving
          </p>
          <p>
            <strong>Currently:</strong> Building YJSP&apos;s Fullscale Turbopumps
          </p>
        </div>
      </div>
    </section>
  )
}

export default EngineeringAboutPage
