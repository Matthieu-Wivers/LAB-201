import React from 'react';
import styled from 'styled-components';
import logos from '../assets/logos.png'




const Accueil = ({id}) => {
  return (
    <Container id={id}>
      <ImageWrapper>
        <Logo src={logos} alt="logo" />
      </ImageWrapper>
      <Text>Disponible dès le 29 Août</Text>
          <Section>
      <LeftContent>
        <Title>"Bloom Baby Bloom"</Title>
        <Paragraph>
         Découvrez le premier single extrait de l’album ! <br />
         Écoutez-le maintenant et préparez-vous pour la sortie complète.
        </Paragraph>
      </LeftContent>

      <RightContent>
        <iframe
          src="https://open.spotify.com/embed/track/3QJtQCtKVX5rLNYEsy4CWA?utm_source=generator&theme=0"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </RightContent>
    </Section>
    </Container>
    
  );
};

export default Accueil;

// style englobant
const Container = styled.div`
  text-align: center;
  padding-top:70px;
  background: #160000;
`;
// style specifique

const ImageWrapper = styled.div`
  position: relative;
  background-image: url('/Images/Accueil.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

// style logo
const Logo = styled.img`
  position: absolute;
  bottom: -8vh; 
  left: 50%;
  transform: translateX(-50%);
  height: 20vh;
`;
// style text

const Text = styled.p`
  margin-top: 40px;
  color: white;
  font-size: 1.2rem;
  margin:10vh 0;
  font-weight: bold;
    font-family: 'Lato', sans-serif;

`;

// style section
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 4rem 2rem;
  color: white;
  background: #2F0101;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  text-align: left;
  margin-bottom:8vh;
  @media (max-width: 768px) {
  margin-bottom:0vh;
  }

`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: rem;
  font-family: 'League Spargan', sans-serif;
  color:#F3E4B2;
  
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
    font-family: 'Lato', sans-serif;
`;

const RightContent = styled.div`
  flex: 1;

  iframe {
    width: 100%;
    height: auto;
    border-radius: 12px;

  }
  @media (max-width: 768px) {
     iframe {
    margin-right: 25vh;
  }
  }
`;