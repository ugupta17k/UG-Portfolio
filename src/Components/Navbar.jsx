const Navbar = ({ page = "home" }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src="/img/DP.jpeg"
        alt="Ujjwal Gupta"
      />
      <div className="portfolio-nav-links flex gap-7 text-sm font-light">
        <a
          className={`text-base font-light ${page === "home" ? "is-active" : ""}`}
          href="#/"
        >
          Home
        </a>
        <a
          className={`text-base font-light ${page === "projects" ? "is-active" : ""}`}
          href="#/projects"
        >
          Projects
        </a>
        <a className="text-base font-light" href={page === "home" ? "#experience" : "#/"}>
          Experience
        </a>
        <a className="text-base font-light" href={page === "home" ? "#skills" : "#/"}>
          Skills
        </a>
      </div>
    </div>
  );
};

export default Navbar;
