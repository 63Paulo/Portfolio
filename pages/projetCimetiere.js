import React from 'react';
import ProjetCimetiere from '../Components/PageProjets/ProjetCimetiere';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const PageProjetCimetiere = () => {
  return (
    <>
      <NavBar/>
      <ProjetCimetiere/>
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default PageProjetCimetiere;