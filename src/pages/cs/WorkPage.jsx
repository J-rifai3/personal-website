import ImageSlot from '../../components/ImageSlot.jsx'

const csProjects = [
  {
    title: 'Project One',
    images: [
      '/images/cs-project-1a.jpg',
      '/images/cs-project-1b.jpg',
      '/images/cs-project-1c.jpg',
      '/images/cs-project-1d.jpg',
    ],
    description: 'Tempo Scheduler: a web app that allows users to schedule their tasks and projects using an AI backend that places the tasks in the best order at the best times',
  },
  {
    title: 'Project Two',
    images: [
      '/images/cs-project-2a.jpg',
      '/images/cs-project-2b.jpg',
      '/images/cs-project-2c.jpg',
    ],
    description: 'Quizzical: a quiz game that takes from a quiz question API, selects 5 at random, and allows users to answer them and see their score',
  },
  {
    title: 'Project Three',
    images: [
      '/images/cs-project-3a.jpg',
      '/images/cs-project-3b.jpg',
      '/images/cs-project-3c.jpg',
    ],
    description: 'Assembly Endgame: a hangman-like game that allows users to guess a word with a limited number of guesses',
  },
  {
    title: 'Project Four',
    images: [
      '/images/cs-project-4a.jpg',
      '/images/cs-project-4b.jpg',
      '/images/cs-project-4c.jpg',
    ],
    description: 'Tenzies: a game that allows users to roll a dice and then select which dice to keep, with the goal of getting all the dice to the same number',
  },
  {
    title: 'Project Five',
    images: [
      '/images/cs-project-5a.jpg',
      '/images/cs-project-5b.jpg',
      '/images/cs-project-5c.jpg',
    ],
    description: 'ShuGaze: a web app designed to predict future shoe prices, using a forest regression model and data scraped from StockX. Users can view different shoes and buy them ',
  },
  {
    title: 'Project Six',
    images: [
      '/images/cs-project-6a.jpg',
      '/images/cs-project-6b.jpg',
    ],
    description: 'Mujoco Project: a sample robotics simulation project, using the Mujoco library to simulate a robotic arm\'s motion',
  },
  {
    title: 'Project Seven',
    images: [
      '/images/cs-project-7a.jpg',
      '/images/cs-project-7b.jpg',
    ],
    description: 'FilmFindr: a web app designed to help users find movies to watch, using the OMDB API. They can save movies to a watchlist and view them later',
  },
]

function CsWorkPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Portfolio</p>
      <h2>Selected work.</h2>
      <p className="lead">Here is just a small sample of the projects I've worked on.</p>
      <div className="work-grid">
        {csProjects.map((project) => (
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

export default CsWorkPage
