import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>PAUL FERNANDES - PORTFOLIO</title>
        <link rel="stylesheet" href="/style/style.css" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.navbar}>
        <button
          className={styles['toggle-btn']}
          onClick={toggleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles['navbar-links']}>
          <a href="#homepage">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#parcours">Parcours</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className={styles.homepage} id="homepage">
        <h1>PAUL FERNANDES</h1>
        <h2>Etudiant en développement web.</h2>
      </div>
      <div className={styles.about} id="about">
        <h1 className={styles.aboutme}>A PROPOS DE MOI</h1>
        <h2 className={styles.aboutme}>
          Je suis Paul Fernandes, un étudiant actuellement en première année de BTS SIO (Services Informatiques aux Organisations).
          Mon lien avec le développement est forgé par ma formation en BTS SIO, mon expérience pratique et ma passion pour
          l'apprentissage. Je suis enthousiaste à l'idée de continuer à développer mes compétences et de contribuer au monde de
          l'informatique en créant des solutions innovantes et en repoussant les limites de ce qui est possible grâce au développement.
        </h2>
        <h1 className={styles.competences}>COMPETENCES</h1>
        <h2 className={styles.competences}>
          Grâce à ma formation, j'ai acquis une solide maîtrise des langages suivants :
          HTML, CSS, Python, JavaScript, C#, MySQL et PHP. Ces langages de programmation polyvalents me permettent
          de concevoir et de développer des sites web interactifs, des applications logicielles, ainsi que d'interagir
          avec des bases de données. Avec ces compétences, je suis en mesure de créer des expériences utilisateur
          attrayantes, d'ajouter des fonctionnalités dynamiques, de résoudre des problèmes de manière efficace et de
          développer des solutions robustes.
        </h2>
      </div>
      <div className={styles.parcours} id="parcours">
        <h1>MON PARCOURS</h1>
        <h2>
          Je suis un étudiant en première année de BTS SIO avec de grandes ambitions. Je souhaite obtenir
          une licence en informatique puis un master pour approfondir mes connaissances et compétences.
          Mon parcours académique reflète mon désir de développement professionnel et ma passion pour la technologie.
          Je suis motivé à travailler dur pour atteindre mes objectifs et contribuer au progrès technologique.
        </h2>
      </div>
      <div className={styles.projets} id="projets">
        <h1>MES PROJETS</h1>
        <div className={styles['bloc-container']}>
          <div className={styles.bloc}>
            <a href="lien1.html">Projet 1</a>
          </div>
          <div className={styles.bloc}>
            <a href="lien2.html">Projet 2</a>
          </div>
          <div className={styles.bloc}>
            <a href="lien3.html">Projet 3</a>
          </div>
          <div className={styles.bloc}>
            <a href="lien4.html">Projet 4</a>
          </div>
          <div className={styles.bloc}>
            <a href="lien5.html">Projet 5</a>
          </div>
          <div className={styles.bloc}>
            <a href="lien6.html">Projet 6</a>
          </div>
        </div>
      </div>
      <form className={styles.contact} id="contact" onSubmit={handleSubmit}>
        <h1>CONTACT</h1>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="name2">Prénom :</label>
        <input type="text" id="name2" name="name2" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Envoyer" />
        <h2>© PAUL FERNANDES 2023</h2>
      </form>
      <script src="/js/NavbarSurbrillance.js"></script>
      <script src="/js/NavbarClick.js"></script>
      <script src="/js/NavbarSurbrillancePart2.js"></script>
      <script src="/js/FriseChrono.js"></script>
      <script src="/js/NavbarMobile.js"></script>
    </div>
  );
}
