import Image from "next/image";
import styles from "./styles.module.scss";

export const SocialButton = ({ text, image, color, link }) => {
  if (color == "purple") {
    return (
      <a className={styles.purple} href={link} target="_blank" rel="noreferrer">
        <Image src={image} alt={`Ícone ${text}`} height={30} width={30} />
        {text}
      </a>
    );
  } else {
    return (
      <a className={styles.pink} href={link} target="_blank" rel="noreferrer">
        <Image src={image} alt={`Ícone ${text}`} height={30} width={30} />
        {text}
      </a>
    );
  }
};
