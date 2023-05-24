// Attendre le chargement complet du document
document.addEventListener('DOMContentLoaded', function() {
    // Obtenir tous les liens de la barre de navigation
    const navLinks = document.querySelectorAll('.navbar a');
  
    // Parcourir les liens et ajouter un écouteur d'événement pour chaque lien
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();
  
        // Retirer la classe "active" de tous les liens
        navLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });
  
        // Ajouter la classe "active" au lien actuel
        link.classList.add('active');
      });
    });
  });
  