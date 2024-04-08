import Image from 'next/image';

const About = () => {

      return (
        <>
          <section className="about" id="about">
            <h1 className="aboutme homepageH1">A PROPOS DE MOI</h1>        
            <h2 className="aboutme">Je suis Paul Fernandes, un étudiant actuellement en deuxième année de BTS SIO (Services Informatiques aux Organisations).
                mon lien avec le développement est forgé par ma formation en BTS SIO, mon expérience pratique et ma passion pour 
                l'apprentissage. Je suis enthousiaste à l'idée de continuer à développer mes compétences et de contribuer au monde de 
                l'informatique en créant des solutions innovantes et en repoussant les limites de ce qui est possible grâce au développement.
            </h2>
            <h1 className="competences homepageH1">COMPETENCES</h1>
            <h2 className="competences">Grâce à ma formation, j'ai acquis une solide maîtrise des langages suivants :
                HTML, CSS, Python, JavaScript, C#, MySQL et PHP. Ces langages de programmation polyvalents me permettent 
                de concevoir et de développer des sites web interactifs, des applications logicielles, ainsi que d'interagir 
                avec des bases de données. Avec ces compétences, je suis en mesure de créer des expériences utilisateur 
                attrayantes, d'ajouter des fonctionnalités dynamiques, de résoudre des problèmes de manière efficace et de 
                développer des solutions robustes.
            </h2>
            <div className="image-container">
              <div className="php-container">
                <Image src="/image/logo/phplogo.png" alt="PHP" className="logo-php" width={170} height={100}></Image>
              </div>
              <div className="html-container">
                <Image src="/image/logo/htmlLogo.png" alt="HTML" className="logo-html" width={100} height={100}></Image>
              </div>
              <div className="sql-container">
                <Image src="/image/logo/mysqlLogo.png" alt="mySQL" className="logo-sql" width={170} height={100}></Image>
              </div>
              <div className="css-container">
                <Image src="/image/logo/cssLogo.png" alt="CSS" className="logo-css" width={100} height={100}></Image>
              </div>
              <div className="js-container">
                <Image src="/image/logo/jsLogo.png" alt="JS" className="logo-js" width={100} height={100}></Image>
              </div>
              <div className="csharp-container">
                <Image src="/image/logo/csharpLogo.png" alt="csharp" className="logo-csharp" width={100} height={100}></Image>
              </div>
              <div className="python-container">
                <Image src="/image/logo/pythonLogo.png" alt="python" className="logo-python" width={100} height={100}></Image>
              </div>
              <div className="nextjs-container">
                <Image src="/image/logo/nextJsLogo.png" alt="nextJs" className="logo-nextJs" width={100} height={100}></Image>
              </div>
            </div>
          </section>
       </>
    
      );
    };
    
    export default About;