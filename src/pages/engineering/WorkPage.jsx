import ImageSlot from '../../components/ImageSlot.jsx'
import imagePaths from '../../content/imagePaths.js'

const projects = [
  {
    title: 'Project One',
    images: imagePaths.projects[0],
    description:
      'Shaft Transmission Design: creating a new shaft calculator and deciding between splines vs. keyways for manufacturing and cost purposes.',
  },
  {
    title: 'Project Two',
    images: imagePaths.projects[1],
    description:
      'Pump Housing/Volute Design: using FEA and CFTurbo to design the housing and volute for our Fullscale Rocket\'s new turbopumps.',
  },
  {
    title: 'Project Three',
    images: imagePaths.projects[2],
    description:
      'Fuel Fill System: designing two new fittings and a fuel tank, speeding up fuel fill time.',
  },
  {
    title: 'Project Four',
    images: imagePaths.projects[4],
    description:
      'ME2110 Robot Design: designing and manufacturing a fully-fledged robot that can complete tasks in a competition.',
  },
]

function EngineeringWorkPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Portfolio</p>
      <h2>Selected work.</h2>
      <p className="lead">Here is just a small sample of the projects I&apos;ve worked on.</p>
      <div className="work-grid">
        {projects.map((project) => (
          <article key={project.title} className="work-item">
            <div className="work-image-grid">
              {project.images.map((imagePath, index) => (
                <ImageSlot
                  key={`${project.title}-${index}`}
                  src={imagePath}
                  alt={`${project.title} project photo ${index + 1}`}
                  className="work-image"
                  placeholderText={`Add image: public${imagePath}`}
                />
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EngineeringWorkPage
