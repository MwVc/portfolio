import styles from "./ProfileStyles.module.css";
import profileImage from "../../assets/profile-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import xLight from "../../assets/twitter-light.svg";
import xDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContent";

function Profile() {
  const { theme, toggleTheme } = useTheme();
  console.log(localStorage.getItem("theme"));

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const xIcon = theme === "light" ? xLight : xDark;
  return (
    <section id="profile" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profileImage}
          alt="Profile Picture"
          className={styles.profileImage}
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Victor
          <br />
          Mwadime
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://x.com/@VictorMwadime" target="_blank">
            <img src={xIcon} alt="X icon" />
          </a>
          <a href="https://github.com/MwVc" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://linkedin.com/in/victor-mwadime-303b07215"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion fo developing modern react web apps for commercial
          business.
        </p>
      </div>
    </section>
  );
}

export default Profile;
