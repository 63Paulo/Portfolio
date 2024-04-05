import React from 'react';
import EvolJeu from '../Components/PageProjets/EvolJeu';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const PageEvolJeu = () => {
  return (
    <>
      <NavBar/>
      <EvolJeu/>
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default PageEvolJeu;
