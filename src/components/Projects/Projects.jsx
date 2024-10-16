import styles from "./ProjectStyles.module.css";
import cvApp from "../../assets/cv-application.png";
import memoryGame from "../../assets/memory-game.png";
import weatherApp from "../../assets/weather-app.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cvApp}
          link={"https://github.com/MwVc/cv-application"}
          title={"CV-App"}
          description="Create a resume"
        />
        <ProjectCard
          src={memoryGame}
          link={"https://github.com/MwVc/memory-game"}
          title={"Memory Game"}
          description="Challenge your memory!"
        />
        <ProjectCard
          src={weatherApp}
          link={"https://github.com/MwVc/Weather-App"}
          title={"Weather App"}
          description="Check local weather"
        />
      </div>
    </section>
  );
}

export default Projects;
