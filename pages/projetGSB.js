import React from 'react';
import Footer from '../Components/Footer/Footer';
import ProjetGestion  from '../Components/PageProjets/ProjetGestion';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const PageProjetGSB = () => {
  return (
    <>
      <NavBar/>
      <ProjetGestion/>
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default PageProjetGSB;
