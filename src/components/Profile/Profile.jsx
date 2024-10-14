import styles from "./ProfileStyles.module.css";
import profileImage from "../../assets/profile-img.png";
import themeIcon from "../../assets/sun.svg";
import xIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";

function Profile() {
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
        <p>
          With a passion fo developing modern react web apps for commercial
          business.
        </p>
      </div>
    </section>
  );
}

export default Profile;
