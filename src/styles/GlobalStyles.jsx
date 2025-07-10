// src/styles/GlobalStyles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
    
  }
  html {
    scroll-behavior: smooth;
  }

`;
// La navigation
export const NavBar = styled.header`
  position: fixed;
  top: 0; 
  width: 100%;
   height: 70px;
  background: #2F0101;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  z-index: 1000;

  img { height: 40px; }

  nav.desktop-menu {
    display: flex;
    gap: 2.5rem;
    margin-right: 1,2rem;
  font-family: 'League Spargan', sans-serif;
  }
    @media (max-width: 768px) {
    nav.desktop-menu {
      display: none;
    }
  }
`;
// les liens de navigation 
export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  font-size: 1.9rem;
  font-family: 'League Spartan', sans-serif;

  &:hover {
    color: #65000B;
    text-decoration: underline;
  }
`;

// Bouton hamburger
export const Burger = styled.button`
  display: none;
  background: none;
  color: white;
  font-size: 2.5rem;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Menu déroulant mobile
export const MobileMenu = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  width: 30%;
  background: #2F0101;
  margin-right:70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem 0;

  a {
    font-size: 0.95rem;
    font-family: 'League Spartan', sans-serif;
  }
`;

// Les sections 
export const Section = styled.section`
  padding: 100px 2rem 2rem;
  min-height: 100vh;
  scroll-margin-top: 80px;
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    font-family: 'Lato', sans-serif;

  }

  i {
    color: #666;
  }
`;

// Container principal
// Footer container
export const FooterContainer = styled.footer`
  background: #2F0101;
  color: white;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px black solid;
  font-family: 'League Spartan', sans-serif;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

// Ligne du footer
export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

// Logo
export const Logo = styled.img`
  height: 30px;
  margin-left: 70px;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto; /* Centre l'image */
  }
`;

// Liens navigation
export const NavLinksFooter = styled.nav`
  display: flex;
  gap: 2.5rem;
  margin-right:100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right:0px;
    gap: 1.2rem;
    margin-top: 1rem;
  }
`;

// Style des liens de navigation
export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.9rem;

  &:hover {
    color: #65000B;
    text-decoration: underline;
  }
`;


// Réseaux sociaux
export const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 2.5rem;
  a{
    color: #f3c01a;
  }

  @media (max-width: 768px) {
    order: 1;
    justify-content: center;
    width: 100%;
  }
`;

// Copyright
export const Copyright = styled.p`
  font-size: 1.3rem;
  color: #F3E4B2;

  @media (max-width: 768px) {
    order: 2;
  }
`;

// Texte indicatif
export const SmallText = styled.p`
  font-size: 1.2rem;
  color: #F3E4B2;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    order: 3;
  }
`;
