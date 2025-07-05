import React from 'react';
import {
FooterContainer,
  FooterRow,
  Logo,
  NavLinksFooter,
  Socials,
  Copyright,
  SmallText,
  FooterLink
} from '../styles/GlobalStyles';
import {FaInstagram, FaTiktok, FaYoutube, FaSpotify} from 'react-icons/fa';
import logo from '../assets/logo.png'; 



const Footer = () => (
    <FooterContainer>
      {/* Ligne 1 : logo + navigation */}
      <FooterRow>
        <Logo src={logo} alt="Logo du groupe" />
        <NavLinksFooter>
          <FooterLink href="#Home">Accueil</FooterLink>
          <FooterLink href="#Tournee">Tournée</FooterLink>
          <FooterLink href="#Groupe">Groupe</FooterLink>
          <FooterLink href="#Contact">Contact</FooterLink>
        </NavLinksFooter>
      </FooterRow>

      {/* Ligne 2 : copyright + réseaux */}
      <FooterRow>
        <Copyright>© 2025 Wolf Alice Tous droits réservés</Copyright>
        <Socials>
           <a href="#"><FaInstagram /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaSpotify /></a>
        </Socials>
      </FooterRow>

      {/* Ligne 3 : texte centré */}
      <FooterRow >
        <SmallText>
          Site réalisé dans le cadre d’un projet étudiant.
        </SmallText>
      </FooterRow>
    </FooterContainer>
);

export default Footer;
