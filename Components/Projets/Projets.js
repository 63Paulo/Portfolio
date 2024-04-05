const Projets = () => {
    // Ici les fonctions Js utilisés
      return (
        <>
          <section className="projets" id="projets">
            <h1 className="projets homepageH1">MES PROJETS</h1>
            <div className="bloc-container">
                <div className="bloc">
                    <a href="/projetApprentissageCalcul">Logiciel apprentissage calcul</a>
                </div>
                <div className="bloc">
                    <a href="/evolJeu">Maintenance corrective et/ou évolutive de jeux </a>
                </div>
                <div className="bloc">
                    <a href="/jeuPython">Jeu en python</a>
                </div>
                <div className="bloc">
                    <a href="/siteNextJs">Site web en next.js</a>
                </div>
                <div className="bloc">
                    <a href="/occasAuto">Occas' Auto C#</a>
                </div>
                <div className="bloc">
                    <a href="/projetGSB">GSB – Gestion des comptes rendus de visites</a>
                </div>
                <div className="bloc">
                    <a href="/ocs-glpi">Projet OCS-GLPI</a>
                </div>
                <div className="bloc">
                    <a href="/projetCimetiere">Réalisation d'un logiciel de gestion de cimetière communal</a>
                </div>
                <div className="bloc">
                    <a href="/siteWebPHP">Site web PHP</a>
                </div>
                <div className="bloc">
                    <a href="/entretienEmbauche">Simulation d'un entretien d'embauche</a>
                </div>
            </div>
          </section>
       </>
    
      );
    };
    
    export default Projets;