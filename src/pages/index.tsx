import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import { Header } from "../components/Header";

//componentes
import { SocialButton } from "../components/SocialButton";
import { SocialLink } from "../components/SocialLink";
import { SkillCard } from "../components/SkillsCard";

// icons
import Linkedin from "/public/icons/linkedinIconButton.svg";
import Github from "/public/icons/githubIconButton.svg";
import MoreContent from "/public/icons/moreIcon.svg";
import Globe from "/public/icons/locationIcon.svg";
import Book from "/public/icons/bookIcon.svg";
import LinkedinLink from "/public/icons/linkedinIcon.svg";
import GithubLink from "/public/icons/githubIcon.svg";
import Instagram from "/public/icons/instagramIcon.svg";
import Whatsapp from "/public/icons/whatsappIcon.svg";
import Email from "/public/icons/mailIcon.svg";

// skills icons
import Html from "/public/icons/htmlIcon.svg";
import Css from "/public/icons/cssIcon.svg";
import Sass from "/public/icons/sassIcon.svg";
import Bootstrap from "/public/icons/bootstrapIcon.svg";
import JavaScript from "/public/icons/javascriptIcon.svg";
import React from "/public/icons/reactIcon.svg";
import Next from "/public/icons/nextIcon.svg";
import Typescript from "/public/icons/typescriptIcon.svg";
import Git from "/public/icons/gitIcon.svg";
import Figma from "/public/icons/figmaIcon.svg";
import { CardService } from "../components/CardService";

//services
import Construction from "/public/icons/codeIcon.svg";
import SEO from "/public/icons/awardIcon.svg";
import Animation from "/public/icons/loaderIcon.svg";
import Personalization from "/public/icons/penIcon.svg";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Desenvolvedor web | Alex T.F.</title>
      </Head>

      <Header />

      <section className={styles.introduction}>
        <div className="container">
          <h1>Especialista em desenvolvimento front-end e web</h1>
          <p>
            Desenvolvo sua marca no mundo on-line com qualidade, velocidade e
            tecnologia
          </p>

          <div className={styles.socialButtons}>
            <SocialButton color="purple" text="linkedIn" image={Linkedin} />
            <SocialButton color="pink" text="github" image={Github} />
          </div>
        </div>

        <a href="#" className={styles.moreContent}>
          <Image
            src={MoreContent}
            alt="Ícone de uma seta apontando para baixo representando mais conteúdo"
          />
        </a>
      </section>

      <main>
        <section className={styles.about}>
          <div className="container">
            <div className={styles.myPhoto}>
              <Image
                src={
                  "https://avatars.githubusercontent.com/u/64914651?s=400&u=bb97a3f82fd533b497b192da51a67bbdb51a16ec&v=4"
                }
                alt="Minha foto"
                width={300}
                height={400}
              />
            </div>

            <div className={styles.aboutMe}>
              <h2>Sobre mim</h2>

              <h3>
                <Image
                  src={Globe}
                  alt="Ícone de um globo na cor verde azulado"
                />
                São Roque - SP, Brasil
              </h3>

              <h3>
                <Image
                  src={Book}
                  alt="Ícone de um livro na cor verde azulado"
                />
                Fatec - São Roque - SP
              </h3>

              <p>
                Entusiasta das melhores tecnologias de desenvolvimento web e
                mobile. <br />
                Focado no mundo JavaScript - React.js, Next.js e React-Native.
                <br />
                `&1uot` O aprendizado é contínuo, e sempre haverá o próximo
                nível 🚀`&1uot`
              </p>

              <div className={styles.socialLinks}>
                <SocialLink image={LinkedinLink} alt="LinkedIn" />
                <SocialLink image={GithubLink} alt="Github" />
                <SocialLink image={Instagram} alt="Instagram" />
              </div>

              <div className={styles.socialButtons}>
                <SocialButton color="pink" text="Whatsapp" image={Whatsapp} />
                <SocialButton color="purple" text="E-mail" image={Email} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skills}>
          <div className="container">
            <h2>Conhecimentos</h2>

            <div className={styles.skillCards}>
              <SkillCard image={Html} text="Html" />
              <SkillCard image={Css} text="Css" />
              <SkillCard image={Sass} text="Sass" />
              <SkillCard image={Bootstrap} text="Bootstrap" />
              <SkillCard image={JavaScript} text="JavaScript" />
              <SkillCard image={React} text="React" />
              <SkillCard image={Next} text="Next" />
              <SkillCard image={Typescript} text="Typescript" />
              <SkillCard image={Git} text="Git" />
              <SkillCard image={Figma} text="Figma" />
            </div>
          </div>
        </section>

        <section className={styles.services}>
          <div className="container">
            <h2>Serviços</h2>

            <div className={styles.cardsServices}>
              <CardService
                title="Construção de sites"
                text="Construção de landing page, blogs, sites institucionais e portfolios"
                image={Construction}
              />
              <CardService
                title="SEO"
                text="Melhore o SEO de seu site para que seja encontrado nos mecanismos de buscas"
                image={SEO}
              />
              <CardService
                title="Animações"
                text="Seu site com uma cara mais tecnológica e agradável para seus clientes"
                image={Animation}
              />
              <CardService
                title="Personalização"
                text="Seu site criado do 0 com o perfil de seus clientes"
                image={Personalization}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
