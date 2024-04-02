import Image from 'next/image';

const Footer = () => {
    // Ici les fonctions Js utilisés
      return (
        <>
          <footer className="footer" id="footer">
            <div className="footer-container" id="footer-container">
              <ul className="footer-links" id="footer-links">
                <li>
                  <a href="https://github.com/63Paulo" target="_blank">
                    <Image src="/../public/image/logo/footerLogo/gh-logo.png"  width={50} height={50} />
                  </a>
                </li>
                <li>
                  <a className='' href="https://www.linkedin.com/in/paul-fernandes-b68559268/" target="_blank">
                    <Image src="/image/logo/footerLogo/in-logo.png"  width={50} height={50} />
                  </a>
                </li>
                <li>
                  <a href="/CV_Paul_Fernandes.pdf" target="_blank">
                    <Image src="/image/logo/footerLogo/cv_logo.png"  width={50} height={50} />
                  </a>
                </li>
            </ul>
          </div>
            <h2>© PAUL FERNANDES 2024</h2>
          </footer>
       </>
    
      );
    };
    
    export default Footer;