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
  background: #111;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  z-index: 1000;

  img { height: 40px; }

  nav {
    display: flex;
    gap: 2.5rem;
    margin-right: 1,2rem;
    /* border: 2px solid white; */
  }
`;
// les liens de navigation 
export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  font-size: 1,9rem;
  font-family: 'League Spargan', bold;

  &:hover {
    color: #65000B;
    text-decoration: underline;
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

// le footer 
export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center; /* centre tout */
  gap: 2rem;
  background-color: #000;
  color: #eee;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Links = styled.nav`
  display: flex;
  gap: 1.5rem;
  a {
    color: #eee;
    text-decoration: none;
  font-family: 'League Spargan', bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyright = styled.div`
  white-space: nowrap;
`;

