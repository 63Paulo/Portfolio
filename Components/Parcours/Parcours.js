//import gsap from 'gsap';

const Parcours = () => {
    
      const events = [
        {
          date: '2022',
          title: 'BTS SIO',
          description : ''
        }
      ]

      return (
        <>
          <div class="parcours" id="parcours">
            <h1 className="parcoursH1 homepageH1">MON PARCOURS</h1>
            <h2 className="parcoursH2">Je suis un étudiant en première année de BTS SIO avec de grandes ambitions. Je souhaite obtenir 
                une licence en informatique puis un master pour approfondir mes connaissances et compétences. 
                Mon parcours académique reflète mon désir de développement professionnel et ma passion pour la technologie. 
                Je suis motivé à travailler dur pour atteindre mes objectifs et contribuer au progrès technologique.
            </h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date"></div>
              <div className="timeline-content">


              </div>
            </div>

          </div>
       </>
      );
    };
    
    export default Parcours;