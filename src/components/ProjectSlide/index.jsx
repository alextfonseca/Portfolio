import styles from "./styles.module.scss";

import Link from "../../../public/icons/link.svg";
import { SocialButton } from "../SocialButton";

export const ProjectSlide = ({
  title,
  aboutText,
  visitLink,
  technologies,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={aboutText} />

      <h3>{title}</h3>

      <p>{aboutText}</p>

      <ul>
        {technologies.map((technology) => {
          return <li key={technology.text}>{technology.text}</li>;
        })}
      </ul>

      <SocialButton
        link={visitLink}
        color="purple"
        text="visualizar"
        image={Link}
      />
    </div>
  );
};
