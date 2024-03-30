const OcsGLPI = () => {
    // Ici les fonctions Js utilisés
      return (
        <>
          <section className="OcsGLPI" id="OcsGLPI">
            <h1 className="OcsGLPI-h1">PROJET OCS-GLPI</h1>
            <h2 className="OcsGLPI-h2">Mise en place d'un serveur de ticketing</h2>
            <div className="content">
              <div className="competences">
                <h1>COMPÉTENCES VALIDÉES</h1>
                <ul>
                  <li>C1 : Gérer le patrimoine informatique</li>
                  <li>C2 : Répondre aux incidents et aux demandes d’assistance et d’évolution</li>
                  <li>C4 : Travailler en mode projet</li>
                </ul>
              </div>
              <div className="presentation">
                <h1>PRESENTATION & CONTEXTE</h1>
                <ul>
                  <li>- Mission de mise en place de proposition GLPI</li>
                  <li>- Objectif : Configuration pour la section SIO incluant locaux, utilisateurs, matériels/logiciels.</li>
                  <li>- Existant : un serveur OCS/GLPI entièrement installé en modèle sur la ferme de serveurs (Modèle SRV_OCS).</li>
                </ul>
              </div>
              <div className="besoin">
              <h1>EXPRESSION DU BESOIN</h1>
              <h2>Voici les différents besoins auxquels nous devons répondent pour ce projet</h2>
                <ul>
                  <li>• Attribution de droits variés aux utilisateurs (création, résolution, clôture).</li>
                  <li>• Présentation d'un rapport détaillé avec captures d'écran pour illustration.</li>
                  <li>• Démonstration de cas concrets de création et résolution de tickets avec étapes détaillées.</li>
                </ul>
              </div>
            </div>
          </section>
       </>
      );
    };
    
export default OcsGLPI;