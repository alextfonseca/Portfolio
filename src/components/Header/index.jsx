import Image from "next/image";
import { useState } from "react";

import styles from "./styles.module.scss";

import Logo from "/public/icons/logo.svg";

export const Header = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false);

  function handleMenuButton() {
    setHiddenMenu(!hiddenMenu);
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <a href="#top">
          <Image
            src={Logo}
            alt="logo do sites escrito Alex T.F. entre tags do html 5"
            width={151}
            height={27}
          />
        </a>

        <nav>
          <button
            className={styles.menuButton}
            onClick={handleMenuButton}
            aria-label="Abrir menu"
          ></button>
          <ul className={hiddenMenu ? styles.active : styles.disabled}>
            <button
              className={styles.closeMenuButton}
              onClick={handleMenuButton}
              aria-label="Fechar menu"
            ></button>
            <li>
              <a onClick={handleMenuButton} href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a onClick={handleMenuButton} href="#skills">
                Conhecimento
              </a>
            </li>
            <li>
              <a onClick={handleMenuButton} href="#services">
                Serviços
              </a>
            </li>
            <li>
              <a onClick={handleMenuButton} href="#projects">
                Projetos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
