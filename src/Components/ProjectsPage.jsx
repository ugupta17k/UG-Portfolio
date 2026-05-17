import Navbar from "./Navbar";
import "./Hero.css";
import { projectList } from "../data/projects";

const ProjectsPage = () => {
  return (
    <div className="portfolio-root relative min-h-screen w-full overflow-x-hidden text-white">
      <div className="portfolio-bg">
        <img src="/img/bg.svg" alt="Portfolio background" />
      </div>

      <div className="portfolio-content">
        <div className="portfolio-column">
          <div className="portfolio-body">
            <div className="portfolio-nav">
              <Navbar page="projects" />
            </div>

            <section className="portfolio-project-page portfolio-project-page-full">
              <div className="portfolio-project-page-header">
                <span className="portfolio-page-kicker">Projects</span>
                <h1 className="portfolio-page-title">My Work & Future Builds</h1>
                <p>
                  A separate project page with the same background and centered
                  layout as the home page, showing the products I have built and
                  the ideas I want to build next.
                </p>
              </div>

              <div className="portfolio-project-scroll portfolio-project-scroll-page">
                {projectList.map((project) => (
                  <article key={project.title} className="portfolio-project-row">
                    <div className="portfolio-project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="portfolio-project-copy">
                      <span>{project.status}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <p className="portfolio-project-stack">{project.stack}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
