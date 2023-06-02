import { useState } from 'react';
import Link from 'next/link';

//TODO:Will j'ai réussi a mettre en surbrillance mais que lorsque que je clique sur la rubrique
//TODO:Will en gros je veux que quand je scroll sur le site, la page sur la quelle je me trouve soit en surbrillance (d'une autre couleur) dans la navbar
//TODO:Will par exemple si je scroll jusqu'à la page projet, je veux que le 'projet' dans la navbar soit d'une autre couleur que les autres rubriques
// Cela fonctionner en html au départ ??
// Non pas totalement en gros quand j'appuyais sur une rubrique de la navbar elle restait tout le temps en surbrillance même quand j'allais sur une autre page 
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
          <Link href="#homepage" scroll={false}>Accueil</Link>
            <Link href="#about" scroll={false}>À propos</Link>
            <Link href="#parcours" scroll={false}>Parcours</Link>
            <Link href="#projets" scroll ={false}>Projets</Link>
            <Link href="#contact" scroll={false}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
