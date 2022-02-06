import Image from "next/image";
import styles from "./styles.module.scss";

interface SocialButtonProps {
  text: string;
  image: string;
  color: string;
}

export const SocialButton = ({ text, image, color }: SocialButtonProps) => {
  if (color == "purple") {
    return (
      <a className={styles.purple} href="#">
        <Image src={image} alt={`Ícone ${text}`} />
        {text}
      </a>
    );
  } else {
    return (
      <a className={styles.pink} href="#">
        <Image src={image} alt={`Ícone ${text}`} />
        {text}
      </a>
    );
  }
};
