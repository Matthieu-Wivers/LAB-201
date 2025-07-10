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
import goldLogo from '../assets/goldLogo.png'; 



const Footer = () => (
    <FooterContainer>
      <FooterRow>
        <Logo src={goldLogo} alt="Logo du groupe" />
        <NavLinksFooter>
          <FooterLink href="#Home">Accueil</FooterLink>
          <FooterLink href="#Tournee">Tournée</FooterLink>
          <FooterLink href="#Groupe">Groupe</FooterLink>
          <FooterLink href="#Contact">Contact</FooterLink>
        </NavLinksFooter>
      </FooterRow>

      
      <FooterRow>
        <Copyright>© 2025 Wolf Alice Tous droits réservés</Copyright>
        <Socials>
           <a href="https://www.instagram.com/wolfaliceband/" target="_blank"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@wolfalicemusic" target="_blank"><FaTiktok /></a>
          <a href="https://www.youtube.com/user/wolfalicevideos" target="_blank"><FaYoutube /></a>
          <a href="https://open.spotify.com/intl-fr/artist/3btzEQD6sugImIHPMRgkwV" target="_blank"><FaSpotify /></a>
        </Socials>
      </FooterRow>

      
      <FooterRow >
        <SmallText>
          Site réalisé dans le cadre d’un projet étudiant.
        </SmallText>
      </FooterRow>
    </FooterContainer>
);

export default Footer;
