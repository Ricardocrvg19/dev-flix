/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { useState } from 'react';
import Logo from '../../assets/logo-DevFlix.png';

import { Container, Menu, Li } from './styles';

import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const [changeBg, setChangeBg] = useState(false);

  window.onscroll = () => {
    if (!changeBg && window.pageYOffset > 200) {
      setChangeBg(true);
    } else if (changeBg && window.pageYOffset <= 200) {
      setChangeBg(false);
    }
  };

  return (
    <Container $changeBg={changeBg}>
      <img src={Logo} alt="Company Logo" />
      <Menu>
        <Li $isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>

        <Li $isActive={pathname.includes('/movies')}>
          <Link to="/movies">Movies</Link>
        </Li>

        <Li $isActive={pathname.includes('/series')}>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
