import React from 'react';
import EntretienEmbauche from '../Components/PageProjets/EntretienEmbauche';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const PageEntretienEmbauche = () => {
  return (
    <>
      <NavBar/>
      <EntretienEmbauche/>
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default PageEntretienEmbauche;
