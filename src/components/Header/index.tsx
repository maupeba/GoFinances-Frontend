import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [optionSelected, setOptionSelected] = useState(false);
  return (
    <Container size={size} selected={optionSelected}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" onClick={() => setOptionSelected(true)}>
            <h1>Listagem</h1>
          </Link>
          <Link to="/import" onClick={() => setOptionSelected(false)}>
            <h1>Importar</h1>
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
