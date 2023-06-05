import { useState, useEffect } from 'react';

const ButtonScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className={`fixed bottom-6 right-6 z-10 ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}

    >
      Back to Top
    </button>
  );
};

export default ButtonScrollTop;
