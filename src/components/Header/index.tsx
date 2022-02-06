import Image from "next/image";

import styles from "./styles.module.scss";

import Logo from "/public/icons/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <a href="#">
          <Image
            src={Logo}
            alt="logo do sites escrito Alex T.F. entre tags do html 5"
          />
        </a>

        <nav>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Conhecimento</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
