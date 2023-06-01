import Link from 'next/link';
const NavBar = () => {

  function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('collapsed');
}

  return (
    <>
      <div className="navbar">
          <button className="toggle-btn" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-links">
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