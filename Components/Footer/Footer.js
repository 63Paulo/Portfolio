import Image from 'next/image';

const Footer = () => {
    // Ici les fonctions Js utilisés
      return (
        <>
          <footer className="footer" id="footer">
            <div className="footer-container" id="footer-container">
              <ul className="footer-links" id="footer-links">
                <li>
                  <a href="http://github.com">
                    <Image src="/../public/image/logo/footerLogo/gh-logo.png"  width={50} height={50} />
                  </a>
                </li>
                <li>
                  <a className='' href="http://linkedin.com">
                    <Image src="/../public/image/logo/footerLogo/in-logo.png"  width={50} height={50} />
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com">
                    <Image src="/../public/image/logo/footerLogo/it-logo.png"  width={50} height={50} />
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com">
                    <Image src="/../public/image/logo/footerLogo/twitter-logo.png"  width={50} height={50} />
                  </a>
                </li>
            </ul>
          </div>
            <h2>© PAUL FERNANDES 2023</h2>
          </footer>
       </>
    
      );
    };
    
    export default Footer;