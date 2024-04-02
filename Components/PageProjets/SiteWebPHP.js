import Image from "next/image";

const SiteWebPHP = () => {
    // Ici les fonctions Js utilisés
      return (
        <>
          <section className="SiteWebPHP">
            <h1 className="siteweb-h1">SITE WEB PHP (MVC)</h1>
            <h2 className="siteweb-h2">Le meilleur des années 80.</h2>
            <div className="contentPHP">
              <div className="competences">
                  <h1>COMPETENCES VALIDÉES</h1>
                  <ul>
                      <li>C1 : Gérer le patrimoine informatique</li>
                      <li>C2 : Répondre aux incidents et aux demandes d'assistance et d'évolution</li>
                      <li>C3 : Développer la présence en ligne de l’organisation</li>
                      <li>C4 : Travailler en mode projet</li>
                      <li>C6 : Organiser son développement professionnel</li>
                  </ul>
              </div>
              <div className="presentation">
                <h1>PRÉSENTATION & CONTEXTE</h1>
                <ul>
                  <li>- Objectif : Développer un site web pour gérer les meilleures chansons des années 80-90 en conformité avec le cahier des charges.</li>
                  <li>- Travail en groupe de 4</li>
                  <li>- Aucune ressource fourni : départ de zéro !</li>
                </ul>
              </div>
              <div className="besoin">
                <h1>EXPRESSION DU BESOIN</h1>
                <h2>Le site web devait respecter les contraintes suivantes : </h2>
                <ul>
                  <li>-	Pouvoir rechercher un titre</li>
                  <li>-	Être capable de se connecter et de s’inscrire au site</li>
                  <li>-	Pouvoir ajouter, modifier et supprimer une chanson une fois connectée</li>
                  <li>-	Pouvoir ajouter un album</li>
                </ul>
              </div>
              <div className="maquettes">
                <h1>MAQUETTAGES</h1>
                <div className='img-container'>
                  <Image src={'/../public/image/projetCimetiere/image-test.PNG'} width={800} height={500}></Image>
                  <Image src={'/../public/image/projetCimetiere/image-test.PNG'} width={800} height={500}></Image>
                </div>
              </div>
            <div className="code">
              <h1>CODAGE</h1>
              <ul>
                <li>- Codage en PHP7/HTML/CSS/JAVASCRIPT</li>
                <li>- Utilisation de Bootstrap</li>
                <li>- Utilisation d'une base de données (MYSQL)</li>
              </ul>
            </div>
            <div className="organisation">
              <h1>ORGANISATION DU PROJET</h1>
              <h2>Travail réparti grâce à 2 sprints de deux semaines chacun</h2>
                <div className='img-container'>
                  <Image src={'/../public/image/projetCimetiere/image-test.PNG'} width={800} height={500}></Image>
                </div>
              <ul>
                <li>- Détermination des fonctionnalités et création de maquettes en collaboration pour assurer une cohérence artistique du site.</li>
                <li>- Décomposition des contraintes en tâches plus petites durant les sprints, avec une répartition des responsabilités.</li>
                <li>- Utilisation de Git pour répertorier et gérer les tâches, avec des catégories pour suivre l'avancement (non-attribué, en cours, en test, terminé).</li>
              </ul>
              <div className='img-container'>
                  <Image src={'/../public/image/projetCimetiere/image-test.PNG'} width={800} height={500}></Image>
                  <Image src={'/../public/image/projetCimetiere/image-test.PNG'} width={800} height={500}></Image>
                </div>
              </div>
              <div className="difficulte">
                <h1>DIFFICULTÉS RENCONTRÉES</h1>
                <ul>
                  <li>- Ralentissement de l'avancement dû au manque de compétences en PHP et JavaScript, nécessitant des recherches de solutions.</li>
                  <li>- Interruptions fréquentes dues aux vacances et aux stages, entraînant une perte de familiarité avec le projet et un rythme de progression défavorable.</li>
                  <li>- Difficultés de coordination en dehors des heures de cours, entraînant des problèmes de synchronisation dans le travail d'équipe.</li>
                </ul>
              </div>
            </div>
          </section>
       </>
      );
    };
    
export default SiteWebPHP;