import Image from 'next/image';

const ProjetCimetiere = () => {
    // Ici les fonctions Js utilisés
      return (
        <>
          <section className="ProjetCimetiere" id="ProjetCimetiere">
            <h1 className="titreH1">LOGICIEL DE GESTION DE CIMETIERE COMMUNAL</h1>
            <h2 className="descH2">Stage de 2ème année BTS SIO.</h2>
            <div className="Competences">
              <h1>COMPÉTENCES VALIDÉES</h1>
              <ul className="competencesGrille">
                <li>C2 : Répondre aux incidents et aux demandes d'assistance et d'évolution</li>
                <li>C3 : Travailler en mode projet</li>
                <li>C4 : Mettre à disposition des utilisateurs un service informatique</li>
              </ul>
            </div>
            <div className="Presentation">
              <ul>
                <li>- Yssac-la-Tourette : Une commune française située dans le département du Puy-de-Dôme, en Auvergne-Rhône-Alpes.</li>
                <li>- Mairie dirigée par le maire Alain Fradier : Cherche à mettre en place un logiciel de gestion pour le cimetière communal.</li>
                <li>- Un conseiller municipal, ancien élève en informatique : Sollicite des étudiants en BTS SIO pour réaliser le projet, suite à un prix excessif proposé par une entreprise spécialisée.</li>
                <li>- Proche de Châtel-Guyon et de Riom : Située à proximité de ces autres localités.</li>
              </ul>
              <div className='carteContainer' style={{ width: '100%' }}>
                <iframe
                    width="100%"
                    height="650"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Pl.%20Guillaume%20Douarre,%2063200%20Yssac-la-Tourette+(My%20Business%20Name)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps trackers</a>
                </iframe>
                
              </div>
            </div>
            <div className='expressionBesoin'>
              <h1>EXPRESSION DU BESOIN</h1>
               <h2>Voici les points clés du cahier des charges fournis par la mairie : </h2>
               <ul>
                <li>• Liste, recherche & CRUD</li>
                <li>• Pas de chartes graphique imposées, seulement le logo de la mairie sur chaque formulaire</li>
                <li>• Protection de la saisie des données via un mot de passe</li>
               </ul>
            </div>
            <div className='maquettes'>
              <h1>MAQUETTES RÉALISÉES</h1>
              <h2>Suite à l'analyse du cahier des charges fourni, nous avons opté pour la création de quelques maquettes préliminaires afin de visualiser le concept de notre application.</h2>
              <div className='maquettes-container'>
                <Image src={'/image/projetCimetiere/img-maquette1.PNG'} width={900} height={500}></Image>
                <Image src={'/image/projetCimetiere/img-maquette2.PNG'} width={900} height={500}></Image>
              </div>
            </div>
            <div className='code-tests'>
              <h1>CODE & TESTS</h1>
              <ul>
                <li>• C#</li>
                <li>• Utilisation d'une base de données (MySQL)</li>
                <li>• Utilisation d’extensions pour créer des fichiers word à partir de l’application</li>
                <li>• Plusieurs tests durant les 2 dernières semaines</li>
                <li>• Sauvegarde et export des données</li>
              </ul>
            </div>
            <div className='app-finale'>
            <h1>APPLICATION FINALE</h1>
              <h2>Voici un aperçu de l'application finale :</h2>
              <div className='app-finale-container'>
                <Image src={'/image/projetCimetiere/img-appfinale1.PNG'} width={800} height={500}></Image>
                <Image src={'/image/projetCimetiere/img-appfinale2.PNG'} width={800} height={500}></Image>
              </div>
              <div className='app-finale-container'>
                <Image src={'/image/projetCimetiere/image-test.PNG'} width={800} height={500}></Image>
              </div>
            </div>
            <div className='mise-exploitation'>
              <h1>MISE EN EXPLOITATION</h1>
              <ul>
                <li>• Difficultés dues à l’utilisation d’un serveur pour héberger la base de données</li>
                <li>• Difficultés lors du déploiement de l’application sur l’ordinateur de la mairie</li>
              </ul>
            </div>
          </section>
       </>
      );
    };
    
export default ProjetCimetiere;