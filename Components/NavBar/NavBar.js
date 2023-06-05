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
  const [current, setCurrent] = useState('homepage')
  const handleSectionChange = (event) => {
    console.log(event.target.hash.slice(1))
    setActiveSection(event.target.hash.slice(1));
  };

  useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop } = document.documentElement;
  //     const aboutPos = document.getElementById('about').offsetTop;
  //     const parcoursPos = document.getElementById('parcours').offsetTop;
  //     const projetsPos = document.getElementById('projets').offsetTop;
  //     const contactPos = document.getElementById('contact').offsetTop;

  //     if (scrollTop >= 0 && scrollTop < aboutPos){
  //       setActiveSection('homepage');
  //     }
  //     else if (scrollTop >= aboutPos && scrollTop < parcoursPos){
  //       setActiveSection('about');
  //     }
  //     else if (scrollTop >= parcoursPos && scrollTop < projetsPos){
  //       setActiveSection('parcours');
  //     }
  //     else if (scrollTop >= projetsPos && scrollTop < contactPos){
  //       setActiveSection('projets');
  //     }
  //     else {
  //       setActiveSection('contact')
  //     }

      
  // };

  const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar .navbar-links a");
    window.onscroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60 && scrollY >= section.offsetHeight ) {
        setCurrent(section.getAttribute("id")); 
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
};


  // window.addEventListener('scroll', handleScroll);
  // return () => {
  //   window.removeEventListener('scroll', handleScroll)
  // };
  }, []);
  const links = [
    {"id":1,"href":"#homepage","title" : "Accueil"},
    {"id":2,"href":"#about","title" : "A propos"},
    {"id":3,"href":"#parcours","title" : "Parcours"},
    {"id":4,"href":"#projets","title" : "Projets"},
    {"id":5,"href":"#contact","title" : "Contact"}
  ]
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
            {links.map((link) => {
              return (
                <Link key={link.id} className='' href={`/${link.href}`} scroll={false}><a className='' onClick={handleSectionChange}>{link.title}</a></Link>
              )
            })}
        </div>
      </div>
    </>
  );
};

export default NavBar;
