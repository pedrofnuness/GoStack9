import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" />
          <a href="/dashboard">DASHBOARD</a>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Pedro Nunes</strong>
              <a href="/profile">Meu perfil</a>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
