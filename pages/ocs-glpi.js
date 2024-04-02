import React from 'react';
import OcsGLPI from '../Components/PageProjets/OcsGLPI';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const PageOcsGLPI = () => {
  return (
    <>
      <NavBar/>
      <OcsGLPI/>
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default PageOcsGLPI;