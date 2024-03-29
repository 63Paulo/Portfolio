import React from 'react';
import SiteWebPHP from '../Components/PageProjets/SiteWebPHP';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const PageSiteWebPHP = () => {
  return (
    <>
      <NavBar/>
      <SiteWebPHP/>
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default PageSiteWebPHP;
