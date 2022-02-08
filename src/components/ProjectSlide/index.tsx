import Image from "next/image";

import styles from "./styles.module.scss";

import Project from "/public/images/kenai.png";
import Link from "/public/icons/link.svg";

export const ProjectSlide = () => {
  return (
    <div className={styles.card}>
      <Image
        src={Project}
        alt="Imagem do projeto"
        width={520}
        height={300}
        layout="responsive"
      />

      <h3>Kenai</h3>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, autem
        illum? Obcaecati cupiditate nulla sequi quod, eligendi perferendis,
        suscipit voluptatibus esse hic rem quae velit temporibus, est animi. A,
        quod.
      </p>

      <ul>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Sass</li>
        <li>Axios</li>
        <li>Node.js</li>
      </ul>

      <a className={styles.button} href="#">
        <Image src={Link} alt="link" height={30} width={30} />
        Visualizar
      </a>
    </div>
  );
};
