import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // État pour suivre la rubrique active

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section); // Met à jour la rubrique active lorsqu'un lien est cliqué
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
          <Link href="#homepage" scroll={false}>
            <a className={activeSection === 'homepage' ? 'active' : ''} onClick={() => handleSectionChange('homepage')}>
              Accueil
            </a>
          </Link>
          <Link href="#about" scroll={false}>
            <a className={activeSection === 'about' ? 'active' : ''} onClick={() => handleSectionChange('about')}>
              À propos
            </a>
          </Link>
          <Link href="#parcours" scroll={false}>
            <a className={activeSection === 'parcours' ? 'active' : ''} onClick={() => handleSectionChange('parcours')}>
              Parcours
            </a>
          </Link>
          <Link href="#projets" scroll={false}>
            <a className={activeSection === 'projets' ? 'active' : ''} onClick={() => handleSectionChange('projets')}>
              Projets
            </a>
          </Link>
          <Link href="#contact" scroll={false}>
            <a className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleSectionChange('contact')}>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
