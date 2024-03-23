import React from 'react';
import ProjetApprentissageCalcul from '../Components/PageProjets/ProjetApprentissageCalcul';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const PageProjetApprentissageCalcul = () => {
  return (
    <>
      <NavBar/>
      <ProjetApprentissageCalcul/>
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default PageProjetApprentissageCalcul;
