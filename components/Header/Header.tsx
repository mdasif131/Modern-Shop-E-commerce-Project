import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <header>
      <Container className="bg-white py-5 flex items-center justify-between border-b border-b-black/20">
        <Logo />
        <HeaderMenu />
        <div>Others</div>
      </Container>
    </header>
  );
};

export default Header;
