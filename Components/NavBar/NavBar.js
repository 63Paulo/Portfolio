import { useState, useEffect} from 'react';
import Link from 'next/link';

const NavBar = () => {
  // State for seeing if the navbar element is active
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const handleToggle = () => {
    // Reverse the 'isOpen' state when the button is clicked
    setIsOpen(!isOpen);
  };
  const handleSectionChange = (event) => {
    console.log(event.target.hash.slice(1))
    setActiveSection(event.target.hash.slice(1));
  };

  useEffect(() => {
    // Here select all section (homepage, about ...)
    const sections = document.querySelectorAll("section");

    // Here select all link (a) of navbar
    const navLi = document.querySelectorAll(".navbar .navbar-links a");
    // Create a current const empty for beginning
    const current = '';
    window.onscroll = () => {

      // ForEach on all sections
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          // scrollY it is the pixel in the center of the screen, as soon as it is between the top and the bottom of the section we change the constant to give it the name of the section.
          if (scrollY >= sectionTop - 160 && scrollY < (section.offsetHeight + section.offsetTop)) {
            current = section.getAttribute("id");
          }
        });

        //  After We make a loop on the different links of the navbar as soon as the name corresponds to the section we assign the active class to the corresponding link
        navLi.forEach((li) => {
          li.classList.remove("active");
          if (li.hash.slice(1) == current) {
            li.classList.add("active");
          }
        });
    };
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