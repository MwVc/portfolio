import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillsList from "../../common/SkillsList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIconDark} skill="HTML" />
        <SkillsList src={checkMarkIconDark} skill="CSS" />
        <SkillsList src={checkMarkIconDark} skill="Javascript" />
        <SkillsList src={checkMarkIconDark} skill="Node.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIconDark} skill="React" />
        <SkillsList src={checkMarkIconDark} skill="Bootstrap" />
        <SkillsList src={checkMarkIconDark} skill="Git" />
        <SkillsList src={checkMarkIconDark} skill="Vite" />
        <SkillsList src={checkMarkIconDark} skill="Webpack" />
      </div>
    </section>
  );
}

export default Skills;
