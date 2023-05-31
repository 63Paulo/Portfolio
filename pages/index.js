import Head from 'next/head';
import NavBar from '../Components/NavBar/NavBar.js';
import Homepage from '../Components/Homepage/Homepage.js';
import About from '../Components/About/About.js';
import Parcours from '../Components/Parcours/Parcours.js';
import Projets from '../Components/Projets/Projets.js';

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
      <NavBar/>
      <Homepage/>
      <About/>
      <Parcours/>
      <Projets/>
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
