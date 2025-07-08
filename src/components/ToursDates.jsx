import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import styled from "styled-components";

const ToursDates = ({ id }) => {
  const [tours, setTours] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const dbRef = ref(database, "Tour-DB");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const loadedTours = [];
      for (const key in data) {
        loadedTours.push({ key, ...data[key] });
      }
      setTours(loadedTours);
    });
  }, []);

  const displayedTours = showAll ? tours : tours.slice(0, 3);

  return (
    <Wrapper>
      <section id={id}>
        <Title>Tournée 2025</Title>
        <Description>
          Une série de concerts à ne pas manquer à l’occasion de la sortie de The Clearing <br />
          Réservez vos places dès maintenant.
        </Description>

        <CardsContainer columns={displayedTours.length >= 3 ? 3 : displayedTours.length}>
          {displayedTours.map((tour) => (
            <Card key={tour.key}>
              <h3>{tour.CITY}, {tour.COUNTRY}</h3>
              <DateInfo>
                <img src="/Images/calendarIcon.png" alt="Calendrier" />
                {tour.DATE}
              </DateInfo>
              <p>{tour.PLACE}</p>
              <p>{tour.STATUS}</p>
            </Card>
          ))}
        </CardsContainer>

        {!showAll && tours.length > 3 && (
          <ButtonWrapper>
            <Button onClick={() => setShowAll(true)}>Voir Plus</Button>
          </ButtonWrapper>
        )}
      </section>

      <Presentation>
        <ImageContainer>
          <VinylImage src="/Images/VinylRecordMockup1.png" alt="Tournée" />
        </ImageContainer>

        <TextContainer>
          <TitleLeft>Précommandez dès maintenant le vinyle !</TitleLeft>
          <Paragraph>
            Profitez d’une édition limitée et <br />un son de qualité exceptionnelle.
          </Paragraph>
          <ButtonPrecommande>Précommander</ButtonPrecommande>
        </TextContainer>
      </Presentation>
    </Wrapper>
  );
};

export default ToursDates;

// Styled Components

const Wrapper = styled.div`
  background: #160000;
  padding: 3rem 1rem;
  font-family: 'Lato', sans-serif;
  color: #fff;
`;

const Title = styled.h2`
  font-family: 'League Spartan', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const TitleLeft = styled(Title)`
  text-align: left;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
  }
`;

const Card = styled.div`
  border: 1px solid #E5B85A;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  box-sizing: border-box;
  color: #fff;

  h3 {
    margin: 0 0 0.5rem 0;
  }
`;

const DateInfo = styled.p`
  color: #F3E4B2;
  display: flex;
  align-items: center;
  margin: 0 0 0.5rem 0;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 0.3rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  background: linear-gradient(to right, #E5B85A, #F3E4B2, #E5B85A, #F3E4B2);
  color: #000;
  border: none;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
`;

const Presentation = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 1rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  flex: 1 1 300px;
  width: 100%;
  border: 2px solid #fff;
`;

const VinylImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  flex: 1 1 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const ButtonPrecommande = styled(Button)`
  width: 50%;
`;
