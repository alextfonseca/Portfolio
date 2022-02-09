import Image from "next/image";

import styles from "./styles.module.scss";

import Project from "/public/images/kenai.png";
import Link from "/public/icons/link.svg";
import { SocialButton } from "../SocialButton";

interface ProjectSlideProps {
  title: string;
  aboutText: string;
  visitLink: string;
  technologies: [text: string];
  imageUrl: string;
}

// interface technologyProps {
//   technology: [text: string];
// }

export const ProjectSlide = ({
  title,
  aboutText,
  visitLink,
  technologies,
  imageUrl,
}: ProjectSlideProps) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={aboutText} />

      <h3>{title}</h3>

      <p>{aboutText}</p>

      <ul>
        {technologies.map((technology: any) => {
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
