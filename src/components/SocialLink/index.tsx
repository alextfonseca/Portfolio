import Image from "next/image";

import styles from "./styles.module.scss";

interface SocialLinkProps {
  image: string;
  alt: string;
  link: string;
}

export const SocialLink = ({ image, alt, link }: SocialLinkProps) => {
  return (
    <a href={link} className={styles.button} target="_blank" rel="noreferrer">
      <Image src={image} alt={alt} width={30} height={30} />
    </a>
  );
};
