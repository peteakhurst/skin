import { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      style={{ top: visible ? '0' : '-100px', transition: 'top 0.5s ease' }}
    >
      <nav>
        <div className='navbar'>
          <div className='left-nav'>
            <a href='#'>Shop</a>
            <a href='#'>About</a>
            <a href='#'>Our Farmers</a>
            <a href='#'>Ingredients</a>
          </div>
          <div className='logo-wrapper'>
            <a href='#'>
              <img src={Logo} alt='Skin Logo' />
            </a>
          </div>
          <div className='right-nav'>
            <a href='#'>Account</a>
            <a href='#'>Cart (0)</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
