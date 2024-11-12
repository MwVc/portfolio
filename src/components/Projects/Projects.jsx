import styles from "./ProjectStyles.module.css";
import memoryGame from "../../assets/memory-game.png";
import weatherApp from "../../assets/weather-app.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={memoryGame}
          link={"https://memorize-gif.netlify.app/"}
          title={"Memory Game"}
          description="Challenge your memory!"
        />
        <ProjectCard
          src={weatherApp}
          link={"https://mwvc.github.io/Weather-App/"}
          title={"Weather App"}
          description="Check local weather"
        />
      </div>
    </section>
  );
}

export default Projects;
