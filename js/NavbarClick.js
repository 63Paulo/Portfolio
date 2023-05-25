document.addEventListener('DOMContentLoaded', function() {
  // Sélectionne tous les liens de la navbar
  const navbarLinks = document.querySelectorAll('.navbar a');

  // Parcourt chaque lien de la navbar
  for (let i = 0; i < navbarLinks.length; i++) {
    // Ajoute un écouteur d'événement de clic à chaque lien
    navbarLinks[i].addEventListener('click', function(event) {

      event.preventDefault();

      // Récupère l'ID de la rubrique ciblé en supprimant le caractère '#' du lien
      const targetId = navbarLinks[i].getAttribute('href').substring(1);

      // Récupère l'élément de la rubrique ciblé en utilisant son ID
      const targetSection = document.getElementById(targetId);

      // Vérifie si la rubrique ciblé existe
      if (targetSection) {
        const offsetTop = targetSection.offsetTop;

        // Fait défiler la fenêtre jusqu'à la position de la section cible de manière fluide (avec behavior : smooth)
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});
