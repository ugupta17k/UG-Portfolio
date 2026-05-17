import Navbar from "./Navbar";
import "./Hero.css";
import { projectList } from "../data/projects";

const skills = [
  { name: "Node.js", short: "N", tone: "skill-node" },
  { name: "Express.js", short: "Ex", tone: "skill-express" },
  { name: "React.js", short: "R", tone: "skill-react" },
  { name: "MongoDB", short: "M", tone: "skill-mongo" },
  { name: "PostgreSQL", short: "PG", tone: "skill-postgres" },
  { name: "Prisma ORM", short: "P", tone: "skill-prisma" },
  { name: "Next.js", short: "Nx", tone: "skill-next" },
  { name: "Zod", short: "Z", tone: "skill-zod" },
  { name: "Redis", short: "Re", tone: "skill-redis" },
  { name: "WebSockets", short: "WS", tone: "skill-websocket" },
  { name: "Socket.io", short: "S", tone: "skill-socket" },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.901 2H22.58l-8.036 9.185L24 22h-7.406l-5.8-6.584L5.033 22H1.35l8.595-9.824L.8 2h7.594l5.243 5.967L18.901 2Zm-1.29 17.8h2.043L7.284 4.084H5.09L17.61 19.8Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.05c0 1.11.9 2 2.01 2a2.02 2.02 0 0 0 .04-4.05ZM20.8 12.88c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.09-3.36 1.86V8.5H9.77V20h3.37v-5.7c0-1.5.29-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.04V20h3.38l.28-7.12Z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.94c.58.1.8-.25.8-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.27-5.23-5.68 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.19 1.18a10.9 10.9 0 0 1 5.8 0c2.22-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.42.36.78 1.06.78 2.15 0 1.55-.02 2.79-.02 3.17 0 .31.21.67.81.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
    ),
  },
];

const Hero = () => {
  return (
    <div className="portfolio-root relative min-h-screen w-full overflow-x-hidden text-white">
      <div className="portfolio-bg">
        <img src="/img/bg.svg" alt="Portfolio background" />
      </div>

      <div className="portfolio-content">
        <div className="portfolio-column">
          <div className="portfolio-body">
            <div className="portfolio-nav">
              <Navbar page="home" />
            </div>

            <section className="portfolio-social-strip">
              <span className="portfolio-social-label">Connect</span>
              <div className="portfolio-social-links">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} aria-label={link.name}>
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </section>

            <hr className="portfolio-divider" />

            <section id="home" className="portfolio-hero">
              <div className="portfolio-hero-text">
                <h1>Ujjwal Gupta</h1>
                <h2>A Full-Stack Developer</h2>
                <p>
                  I&apos;m a passionate Full Stack Developer who loves building
                  clean, modern, and meaningful digital experiences. I enjoy
                  turning ideas into scalable products using frontend and backend
                  technologies, UI/UX principles, and strong logical
                  problem-solving. From crafting smooth user interfaces to writing
                  efficient server-side code, I focus on creating solutions that
                  truly make an impact.
                </p>
              </div>
            </section>

            <hr className="portfolio-divider" />

            <section className="portfolio-projects">
              <p className="portfolio-quote">
                I love designing and Building thoughtful, Production-grade
                applications
              </p>

              <div className="portfolio-cards">
                {projectList.slice(0, 2).map((project) => (
                  <article key={project.title} className="portfolio-card">
                    <div className="portfolio-card-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="portfolio-card-body">
                      <div className="portfolio-card-heading">
                        <h3>{project.title}</h3>
                        <span>{project.status}</span>
                      </div>
                      <p>{project.description}</p>
                      <p className="portfolio-card-stack">{project.stack}</p>
                    </div>
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="portfolio-btn"
                onClick={() => {
                  window.location.hash = "#/projects";
                }}
              >
                View all projects
              </button>
            </section>

            <hr className="portfolio-divider" />

            <section id="experience" className="portfolio-experience">
              <h2 className="portfolio-section-title">Experience</h2>
              <hr className="portfolio-divider" />

              <div className="portfolio-job">
                <div className="portfolio-job-header">
                  <h3>Full Stack Development &amp; Digital Marketing</h3>
                  <span>sept 2025 - Present</span>
                </div>
                <ul className="portfolio-job-list">
                  <li>
                    - Developing and maintaining full-stack web applications
                    using React.js, Node.js, Express.js, and MongoDB, focusing
                    on performance, scalability, and clean architecture.
                  </li>
                  <li>
                    - Building RESTful APIs, handling backend logic, database
                    operations, and seamless frontend backend integration.
                  </li>
                  <li>
                    - Designing and implementing responsive, user-friendly
                    interfaces, converting Figma designs into production-ready
                    components.
                  </li>
                  <li>
                    - Alongside development work, supporting digital marketing
                    initiatives by optimizing landing pages for SEO,
                    performance, and conversion rates.
                  </li>
                </ul>
              </div>

              <hr className="portfolio-divider" />

              <div className="portfolio-job">
                <div className="portfolio-job-header">
                  <h3>Open Source Contributor</h3>
                  <span>sept 2025 - Present</span>
                </div>
                <ul className="portfolio-job-list">
                  <li>
                    - Mastered React, Node.js, databases, and deployment
                    technologies
                  </li>
                  <li>- Contributed to multiple popular open source projects</li>
                  <li>- Contributed to multiple popular open source projects</li>
                </ul>
              </div>
            </section>

            <hr className="portfolio-divider" />

            <section id="skills" className="portfolio-skills">
              <h2 className="portfolio-section-title">Skills</h2>
              <p className="portfolio-skills-desc">
                I love working with these technologies to build beautiful and
                functional applications.
              </p>
              <div className="portfolio-skill-tags">
                {skills.map((skill) => (
                  <div key={skill.name} className="portfolio-skill-tag">
                    <div className={`portfolio-skill-logo ${skill.tone}`}>
                      <span>{skill.short}</span>
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <hr className="portfolio-divider" />

            <footer className="portfolio-footer-social">
              <p>Let&apos;s build something meaningful together.</p>
              <div className="portfolio-social-links portfolio-social-links-bottom">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} aria-label={link.name}>
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
