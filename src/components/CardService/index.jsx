import Image from "next/image";

import styles from "./styles.module.scss";

export const CardService = ({ image, text, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image src={image} alt={text} width={60} height={60} />

        <h3>{title}</h3>

        <p>{text}</p>
      </div>
    </div>
  );
};
