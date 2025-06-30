import React from 'react';
import {
  FooterContainer,
  Logo,
  Links,
  Copyright,
} from '../styles/GlobalStyles';
import logo from '../assets/logo.png'; 



const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="Logo Groupe" />
    <Links>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="/refund">Refund Policy</a>
    </Links>
    <Copyright>2025 - Present Flowrift. All rights reserved.</Copyright>
  </FooterContainer>
);

export default Footer;
