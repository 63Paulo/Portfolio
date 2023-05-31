import Head from 'next/head';
import NavBar from '../Components/NavBar/NavBar.js';
import Homepage from '../Components/Homepage/Homepage.js';
import About from '../Components/About/About.js';
import Parcours from '../Components/Parcours/Parcours.js';
import Projets from '../Components/Projets/Projets.js';
import Contact from '../Components/Contact/Contact.js';
import Footer from '../Components/Footer/Footer.js';

export default function Home() {

  return (
    // TODO: Attention la class ici n'est pas bonne
    <>
      // TODO: Attention la class ici n'est pas bonne
      <Head>
        <title>PAUL FERNANDES - PORTFOLIO</title>
        <link rel="stylesheet" href="/style/style.css" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
          rel="stylesheet" />
      </Head>
      <NavBar />
      <Homepage />
      <About /
      ><Parcours />
      <Projets />
      <Contact />
      <Footer />
    </>
  );
}
