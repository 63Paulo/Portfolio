//import d'une boutique d'animation
//import {gsap} from 'gsap';
import { useEffect } from 'react';

const Parcours = () => {
    
      // useEffect(() => {
      //   gsap.from('.timeline-item', {
      //     opacity: 0,
      //     y:50,
      //     stagger:0.2,
      //     duration:1,
      //     ease: 'power3.out',

      //   })
      // }

      //)
      // On stock toutes nos informations 
      const events = [
        {
          date: '2022',
          title: 'BTS SIO',
          desc : 'Cursus de 2 ans en BTS SIO'
        },
        {
          date : '2024',
          title : 'Licence ???',
          desc : 'Licence professionnelle en Informatique',
        },
        {
          date : '???',
          title : 'Master ???',
          desc : 'Master en informatique',
        },
      ]

      return (
        <>
          <div className="parcours" id="parcours">
            <h1 className="parcoursH1 homepageH1">MON PARCOURS</h1>
            <h2 className="parcoursH2">Je suis un étudiant en première année de BTS SIO avec de grandes ambitions. Je souhaite obtenir 
                une licence en informatique puis un master pour approfondir mes connaissances et compétences. 
                Mon parcours académique reflète mon désir de développement professionnel et ma passion pour la technologie. 
                Je suis motivé à travailler dur pour atteindre mes objectifs et contribuer au progrès technologique.
            </h2>
            <div className="timeline">
            {events.map((event, index) => (
              <div className="timeline-item" key={index}>
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-content">
                <h2>{event.title}</h2>
                <p>{event.desc}</p>
              </div>
            </div>
            ))}

          </div>
          </div>
       </>
      );
    };
    
    export default Parcours;