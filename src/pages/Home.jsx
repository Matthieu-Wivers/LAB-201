import React from 'react';
import { useState } from 'react';
import { NavBar, NavLink, Burger, MobileMenu, Section } from '../styles/GlobalStyles';
import logo from '../assets/logo.png'
import Contact from '../components/Contact';
import AlbumCarousel from '../components/AlbumsCarousel';
import ToursDates from '../components/ToursDates';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen]= useState(false);
    return (
        <>
            <NavBar>
                <img src={logo} alt="Logo du groupe" />
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

            <main>
                <Section id="Home" >
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </Section>

                <AlbumCarousel />
                <ToursDates />
                

                

                <Section id="Groupe" >
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </Section>

                <Section id="Tournee" >
                    <p><i>Lorem ipsum dolor sit amet consectetur...</i></p>
                </Section>
                
                <Contact id="Contact"/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
