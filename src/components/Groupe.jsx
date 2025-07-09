// App.js ou Groupe.js
import React from 'react';
import styled from 'styled-components';

const Groupe = () => {
  return (
    <Container>
      <Title>Merch exclusif</Title>
      <Paragraph>
        T-shirts, posters et goodies en édition limitée, précommandez dès maintenant.
      </Paragraph>
      <ImageRow>
        <img src="/Images/wolfAliceBag.png" alt="Produit 1" />
        <img src="/Images/wolfAliceBag.png" alt="Produit 2" />
        <img src="/Images/wolfAliceBag.png" alt="Produit 3" />
      </ImageRow>
      <ImageCenter>
        <img src="/Images/SpotifySessionsCover.jpg" alt="SpotifySessionsCover" />
      </ImageCenter>
      <PreorderButton>Précommander</PreorderButton>
      <BarContainer>
        <LongBar />
        <ShortBar />
      </BarContainer>
    </Container>
  );
};

export default Groupe;

const Container = styled.div`
  text-align: center;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #F3E4B2;
  font-family: 'League Spartan', sans-serif;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 30px 0;
`;

const LongBar = styled.div`
  width: 80%;
  height: 4px;
  background-color: #F3E4B2;
  margin: 20px 0;
  border-radius: 2px;
`;

const ShortBar = styled.div`
  width:60%;
  height: 3px;
  background-color: #E5B85A;
  border-radius: 2px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #fff;
  font-family: 'Lato', sans-serif;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 30%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ImageCenter = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 0px;
    display: none;
  }

  img {
    width: 60%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    transition: 0.3s ease;
  }
`;

const PreorderButton = styled.button`
  background: linear-gradient(to right, #E5B85A, #F3E4B2, #E5B85A, #F3E4B2);
  color: #000;
  font-size: 1.1rem;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
`;
