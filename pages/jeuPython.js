import React from 'react';
import JeuPython from '../Components/PageProjets/JeuPython';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const PageJeuPython = () => {
  return (
    <>
      <NavBar/>
      <JeuPython/>
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default PageJeuPython;
