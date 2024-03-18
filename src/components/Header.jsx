const Header = () => {
  return (
    <header>
      <nav>
        <div className='navbar'>
          {/* <div>
            <a href='#'>Shop</a>
            <a href='#'>About</a>
            <a href='#'>Our Farmers</a>
            <a href='#'>Ingredients</a>
          </div> */}
          <div className='img-wrapper'>
            <a href='#'>
              <img src='src/assets/logo.png' alt='Skin Logo' />
            </a>
          </div>
          {/* <div>
            <a href='#'>Account</a>
            <a href='#'>Cart (0)</a>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
