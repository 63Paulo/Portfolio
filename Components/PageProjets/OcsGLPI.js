import Image from "next/image";

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
              <div className="salles">
                <h1>DISPOSITION DES SALLES</h1>
                <h2>Voici un croquis réalisé afin de visualiser la disposition des salles</h2>
                <div className='img-container'>
                  <Image src={'/image/ocsGLPI/img-salle.PNG'} width={1000} height={500}></Image>
                </div>
              </div>
              <div className="groupe-user">
                <h1>CREATION DES GROUPES ET UTILISATEURS</h1>
                <ul>
                  <li>- Un groupe élève et un groupe professeur où les utilisateurs assignés à ce groupe pourront créer des tickets d’incidents (et non les gérés).</li>
                  <li>- Un groupe admin où les utilisateurs assignés à ce groupe pourront gérer les tickets d’incident.</li>
                </ul>
                <div className='img-container'>
                  <Image src={'/image/ocsGLPI/img-creation-groupe.PNG'} width={1000} height={500}></Image>
                  <Image src={'/image/ocsGLPI/img-creation-user.PNG'} width={1000} height={500}></Image>
                </div>
              </div>
              <div className="droits">
                <h1>GESTION DES DROITS</h1>
                <ul>
                  <li>- Droit “admin” aux utilisateurs admin qui gèrent les tickets</li>
                  <li>- Droit “self-service” (par défaut) aux autres utilisateurs</li>
                </ul>
                <div className='img-container'>
                  <Image src={'/image/OcsGLPI/img-droit.PNG'} width={1000} height={500}></Image>
                </div>
              </div>
              <div className="tickets">
                <h1>CREATION ET RESOLUTION DE TICKETS</h1>
                <h2>Voici ci-dessous un exemple de création de tickets suivi de sa résolution et fermeture</h2>
              </div>
              <div className='img-container'>
                  <Image src={'/image/OcsGLPI/img-creation-ticket.PNG'} width={900} height={500}></Image>
                  <Image src={'/image/OcsGLPI/img-resolution-ticket.PNG'} width={900} height={500}></Image>
              </div>
              <div className='img-container'>
                  <Image src={'/image/OcsGLPI/img-statut-ticket.PNG'} width={700} height={400}></Image>
              </div>
              <div className="difficulte">
                <h1>DIFFICULTÉS RENCONTRÉES</h1>
                <ul>
                  <li>- Bugs de la machine virtuelle : Installation échouée d'Apache et GLPI, nécessitant des répétitions de la première partie du projet.</li>
                  <li>- Problèmes de connexion : Incapacité à se reconnecter à GLPI pour reprendre le projet, entraînant la nécessité de recommencer la deuxième partie.</li>
                </ul>
              </div>
            </div>
          </section>
       </>
      );
    };
    
export default OcsGLPI;