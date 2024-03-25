import Image from 'next/image';

const ProjetCimetiere = () => {
    // Ici les fonctions Js utilisés
      return (
        <>
          <section className="ProjetCimetiere" id="ProjetCimetiere">
            <h1 className="titreH1">LOGICIEL DE GESTION DE CIMETIERE COMMUNAL</h1>
            <h2 className="descH2">Réalisation d'un logiciel en C# Windows Forms permettant la gestion d'un cimetière communale durant le stage de 2ème année à l'aide d'un cahier des charges fourni par les responsables du projet.
                - Base de donnée
                - Recherche et liste de concession/concessionnaires/inhumés
                - Gestion des différentes entités (ajout, modification et suppression)
                - Réalisation de différent test
                - Déploiement de l'application
            </h2>
            <div className="Competences">
              <h1>COMPÉTENCES VALIDÉES</h1>
              <ul className="competencesGrille">
                <li>C2 : Répondre aux incidents et aux demandes d'assistance et d'évolution</li>
                <li>C3 : Travailler en mode projet</li>
                <li>C4 : Mettre à disposition des utilisateurs un service informatique</li>
              </ul>
            </div>
            <div className="Presentation">
              <h1>PRESENTATION & CONTEXTE</h1>
              <h2>Yssac-la-Tourette est une commune française située dans le département du Puy-de-Dôme, en région Auvergne-Rhône-Alpes. Elle est proche des villes de Châtel-Guyon et de Riom et fait partie d'une manière plus large de l'aire d'attraction de Clermont-Ferrand.
                  La mairie d’Ysssac-la-Tourette contient une dizaine de conseillers municipaux ainsi que le maire de la commune, Alain Fradier.
                  La mairie, voulant un logiciel dans le but de gérer le cimetière communal, a fait appel à une entreprise spécialisée dans le développement d’applications. Le prix proposé par cette dernière était trop excessif. Ainsi, un conseiller municipal étant un ancien élève du BTS SIO a décidé de faire appel à des étudiants de cette section afin de réaliser cette tâche.
              </h2>
              <div className='carteContainer' style={{ width: '100%' }}>
                <iframe
                    width="66%"
                    height="500"
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
               <h2>Voici le cahier des charges fournis par la mairie : </h2>
               <div className='imageContainer'>
                  <Image className='imageCDC1' src={'/../public/image/projetCimetiere/cachier-des-charges-1.PNG'} width={575} height={720}></Image>
                  <Image className='imageCDC2' src={'/../public/image/projetCimetiere/cahier-des-charges-2.PNG'} width={588} height={541}></Image>
                </div>
            </div>
          </section>
          
       </>
      );
    };
    
export default ProjetCimetiere;