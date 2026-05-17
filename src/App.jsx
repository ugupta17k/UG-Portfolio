import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import ProjectsPage from "./Components/ProjectsPage";

const getPageFromHash = () => {
  const hash = window.location.hash || "#/";
  return hash === "#/projects" ? "projects" : "home";
};

const App = () => {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);

    if (!window.location.hash) {
      window.location.hash = "#/";
    }

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return page === "projects" ? <ProjectsPage /> : <Hero />;
};

export default App;
