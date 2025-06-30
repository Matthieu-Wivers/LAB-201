import React from 'react';
import { NavBar, NavLink, Section } from '../styles/GlobalStyles';
import Footer from './Footer';
import logo from '../assets/logo.png'

const Home = () => {
    return (
        <>
            <NavBar>
                <img src={logo} alt="Logo du groupe" />
                <nav>
                    <NavLink href="#Home">Accueil</NavLink>
                    <NavLink href="#Contact">Contact</NavLink>
                    <NavLink href="#Groupe">Groupe</NavLink>
                    <NavLink href="#Tournee">Tournée</NavLink>
                </nav>
            </NavBar>

            <main>
                <Section id="Home" >
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </Section>

                <Section id="Contact">
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </Section>

                <Section id="Groupe" >
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </Section>

                <Section id="Tournee" >
                    <p><i>Lorem ipsum dolor sit amet consectetur...</i></p>
                </Section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
