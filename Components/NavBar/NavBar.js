

const NavBar = () => {
  // ! cette fonction ne fonctionnera pas
  // TODO commente la pour le moment je te ferai une tâche pour t'expliquer çà ce soir
    // document.addEventListener('DOMContentLoaded', function() {
    //     // Sélectionne tous les liens de la navbar
    //     const navbarLinks = document.querySelectorAll('.navbar a');
      
    //     // Parcourt chaque lien de la navbar
    //     for (let i = 0; i < navbarLinks.length; i++) {
    //       // Ajoute un écouteur d'événement de clic à chaque lien
    //       navbarLinks[i].addEventListener('click', function(event) {
      
    //         event.preventDefault();
      
    //         // Récupère l'ID de la rubrique ciblé en supprimant le caractère '#' du lien
    //         const targetId = navbarLinks[i].getAttribute('href').substring(1);
      
    //         // Récupère l'élément de la rubrique ciblé en utilisant son ID
    //         const targetSection = document.getElementById(targetId);
      
    //         // Vérifie si la rubrique ciblé existe
    //         if (targetSection) {
    //           const offsetTop = targetSection.offsetTop;
      
    //           // Fait défiler la fenêtre jusqu'à la position de la section cible de manière fluide (avec behavior : smooth)
    //           window.scrollTo({
    //             top: offsetTop,
    //             behavior: 'smooth'
    //           });
    //         }
    //       });
    //     }
    //   });
    // // ! cette fonction ne fonctionnera pas
    // TODO commente la pour le moment je te ferai une tâche pour t'expliquer çà ce soir
    // // Code pour mettre les rubriques en surveillance lorsque qu'on est dessus
    // // Attendre le chargement complet du document
    // document.addEventListener('DOMContentLoaded', function() {
    //     // Obtenir tous les liens de la barre de navigation
    //     const navLinks = document.querySelectorAll('.navbar a');
  
    //     // Parcourir les liens et ajouter un écouteur d'événement pour chaque lien
    //     navLinks.forEach(function(link) {
    //         link.addEventListener('click', function(event) {
    //             // Empêcher le comportement par défaut du lien
    //             event.preventDefault();
  
    //              // Retirer la classe "active" de tous les liens
    //             navLinks.forEach(function(navLink) {
    //                  navLink.classList.remove('active');
    //             });
  
    //             // Ajouter la classe "active" au lien actuel
    //             link.classList.add('active');
    //         });
    //     });
    // });

    // Code pour que quand on appuis sur le bouton, la navbar s'affiche
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
            <a href="#homepage">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#parcours">Parcours</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
          </div>
      </div>
    </>
  );
};
    
export default NavBar;