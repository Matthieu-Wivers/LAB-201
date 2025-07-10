import React from 'react';
import { useState } from 'react';
import { NavBar, NavLink, Burger, MobileMenu } from '../styles/GlobalStyles';
import goldLogo from '../assets/goldLogo.png'
import Accueil from '../components/Accueil';
import Contact from '../components/Contact';
import AlbumCarousel from '../components/AlbumsCarousel';
import ToursDates from '../components/ToursDates';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen]= useState(false);
    return (
        <>
            <NavBar>
                <img src={goldLogo} alt="Logo du groupe" />
                 {/* Bouton burger visible en mobile */}
      <Burger onClick={() => setIsOpen(!isOpen)}>
        ☰
      </Burger>
                <nav className='desktop-menu'>
                    <NavLink href="#Home">Accueil</NavLink>
                    <NavLink href="#Tournee">Tournée</NavLink>
                    <NavLink href="#Groupe">Groupe</NavLink>
                    <NavLink href="#Contact">Contact</NavLink>
                </nav>
                   {/* Menu mobile toggle */}
      {isOpen && (
        <MobileMenu>
          <NavLink href="#Home" onClick={() => setIsOpen(false)}>Accueil</NavLink>
          <NavLink href="#Tournee" onClick={() => setIsOpen(false)}>Tournée</NavLink>
          <NavLink href="#Groupe" onClick={() => setIsOpen(false)}>Groupe</NavLink>
          <NavLink href="#Contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </MobileMenu>
      )}
            </NavBar>

            <main style={{background:"#160000"}}>
                <Accueil id="Home" />
                <ToursDates id="Tournee" />
                <AlbumCarousel id="Groupe" />                  
                <Contact id="Contact"/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
