import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"#"}
          title={"Viberr"}
          description="A video streaming app"
        />
        <ProjectCard
          src={freshBurger}
          link={"#"}
          title={"Fresh Burger"}
          description="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link={"#"}
          title={"Hipsster"}
          description="Glasses shop"
        />
        <ProjectCard
          src={fitLift}
          link={"#"}
          title={"Fitlift"}
          description="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
