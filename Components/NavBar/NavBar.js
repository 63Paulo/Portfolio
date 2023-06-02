import { useState, useEffect} from 'react';
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
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight} = document.documentElement;
      const aboutPos = document.getElementById('about').offsetTop;
      const parcoursPos = document.getElementById('parcours').offsetTop;
      const projetsPos = document.getElementById('projets').offsetTop;
      const contactPos = document.getElementById('contact').offsetTop;

      if (scrollTop >= 0 && scrollTop < aboutPos){
        setActiveSection('homepage');
      }
      else if (scrollTop >= aboutPos && scrollTop < parcoursPos){
        setActiveSection('about');
      }
      else if (scrollTop >= parcoursPos && scrollTop < projetsPos){
        setActiveSection('parcours');
      }
      else if (scrollTop >= projetsPos && scrollTop < contactPos){
        setActiveSection('projets');
      }
      else {
        setActiveSection('contact')
      }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll)
  };
  }, []);

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
          <Link href="#homepage" scroll={false} onClick={() => handleSectionChange('homepage')}>Accueil</Link>
            <Link href="#about" scroll={false} onClick={() => handleSectionChange('about')}>À propos</Link>
            <Link href="#parcours" scroll={false} onClick={() => handleSectionChange('parcours')}>Parcours</Link>
            <Link href="#projets" scroll ={false} onClick={() => handleSectionChange('projets')}>Projets</Link>
            <Link href="#contact" scroll={false} onClick={() => handleSectionChange('contact')}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
