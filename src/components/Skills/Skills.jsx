import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillsList from "../../common/SkillsList";
import { useTheme } from "../../common/ThemeContent";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="HTML" />
        <SkillsList src={checkMarkIcon} skill="CSS" />
        <SkillsList src={checkMarkIcon} skill="Javascript" />
        <SkillsList src={checkMarkIcon} skill="Node.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="React" />
        <SkillsList src={checkMarkIcon} skill="Bootstrap" />
        <SkillsList src={checkMarkIcon} skill="Git" />
        <SkillsList src={checkMarkIcon} skill="Vite" />
        <SkillsList src={checkMarkIcon} skill="Webpack" />
      </div>
    </section>
  );
}

export default Skills;
