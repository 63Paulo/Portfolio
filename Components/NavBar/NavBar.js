import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`navbar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-links">
          <Link href="#homepage" scroll={false}><a>Accueil</a></Link>
          <Link href="#about" scroll={false}><a>À propos</a></Link>
          <Link href="#parcours" scroll={false}><a>Parcours</a></Link>
          <Link href="#projets" scroll={false}><a>Projets</a></Link>
          <Link href="#contact" scroll={false}><a>Contact</a></Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
