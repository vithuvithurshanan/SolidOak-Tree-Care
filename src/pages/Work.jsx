import { projects } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import ArrowButton from '../components/ArrowButton'
import './Work.css'

function Work() {
  usePageTitle('Our Work')

  return (
    <div className="work-page">
      <section className="page-hero">
        <div className="container page-hero-card work-hero-card">
          <div className="pill pill-light">Our Work</div>
          <h1>Recent Buffalo Projects</h1>
          <p>A look at some of the tree care jobs we've completed across Western New York.</p>
        </div>
      </section>

      <section>
        <div className="container work-grid">
          {projects.map((project, i) => (
            <div className="work-card" key={project.title}>
              <div className="work-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="work-card-body">
                <div className="pill">{project.category}</div>
                <h2>{project.title}</h2>
                <p>{project.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Want Work Like This Done?</h2>
          <p>Contact us for a free estimate on your property.</p>
          <ArrowButton to="/contact" variant="light">
            Get a Free Quote
          </ArrowButton>
        </div>
      </section>
    </div>
  )
}

export default Work
