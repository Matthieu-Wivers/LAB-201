// App.js ou Groupe.js
import styled from 'styled-components';

const Groupe = () => {
  return (
    <Container>
      <Title>Merch exclusif</Title>
      <Paragraph>
        T-shirts, posters et goodies en édition limitée, précommandez dès maintenant.
      </Paragraph>
      <ImageRow>
        <ImageContainer>
        <StyledImage img src="/Images/HangingTshirtMockup.jpg" alt="Produit 1" />
        </ImageContainer>
          <ImageContainer>
            <StyledImage img src="/Images/Bag.png" alt="Produit 2" />
        </ImageContainer>
          <ImageContainer>
        <StyledImage img src="/Images/Tshirt.png" alt="Produit 3" />
        </ImageContainer>
      </ImageRow>
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
`;

const ImageContainer = styled.div`
  width: 30%; /* ou une taille fixe comme 300px */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* pour éviter les débordements */
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
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
