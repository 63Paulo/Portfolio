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
                    <a href="/projetCimetiere">Maintenance corrective et/ou évolutive de jeux </a>
                </div>
                <div className="bloc">
                    <a href="lien3.html">Jeu en python</a>
                </div>
                <div className="bloc">
                    <a href="lien4.html">Site web en next.js</a>
                </div>
                <div className="bloc">
                    <a href="lien5.html">Occas' Auto C#</a>
                </div>
                <div className="bloc">
                    <a href="lien6.html">GSB – Gestion des comptes rendus de visites</a>
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