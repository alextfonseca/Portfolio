import Image from "next/image";

import styles from "./styles.module.scss";

interface SkillCardProps {
  image: string;
  text: string;
}

export const SkillCard = ({ image, text }: SkillCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image
          className={styles.image}
          src={image}
          alt={text}
          width={"60px"}
          height={"60px"}
        />

        <p>{text}</p>
      </div>
    </div>
  );
};
