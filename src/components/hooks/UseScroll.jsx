import { useState, useEffect } from 'react';

function UseScroll() {
  const [scrolled, setScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 170) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.scrollY]);

  return scrolled;
}

export default UseScroll;
