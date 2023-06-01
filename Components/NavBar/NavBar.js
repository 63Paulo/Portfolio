import { useState } from 'react';
import Link from 'next/link';

//TODO:Will j'ai réussi a mettre en surbrillance mais que lorsque que je clique sur la rubrique

const NavBar = () => {
  // State for seeing if the navbar element is active 
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');  

  const handleToggle = () => {
    // Reverse the 'isOpen' state when the button is clicked
    setIsOpen(!isOpen);  
  };

  const handleSectionChange = (section) => {
    // Updates the navbar elements when its clicked
    setActiveSection(section); 
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
          {/* Link to the differents section */}
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
