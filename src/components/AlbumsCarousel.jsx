import React, { useState } from "react";
import styled from "styled-components";

const albums = [
  {
    id: 1,
    title: "My Love Is Cool",
    img: "./Images/MyLoveIsCoolCover.jpg",
    spotifyUrl:
      "https://open.spotify.com/intl-fr/album/2L82g2rqAlNBcADFzayJBU?si=zxgSVs8cTxywbvTDWYZErA",
  },
  {
    id: 2,
    title: "Vision OF A Life",
    img: "./Images/VisionOfALifeCover.jpg",
    spotifyUrl:
      "https://open.spotify.com/intl-fr/album/7Mn6FjNopuROYZLIN91hhe?si=8wLeDYH-RUSycmuMDA7WVw",
  },
  {
    id: 3,
    title: "Creature Songs",
    img: "./Images/CreatureSongsCover.jpg",
    spotifyUrl:
      "https://open.spotify.com/album/7HVdYVFbPoR0ILDyKYXemR?si=dOScyGZbQBGUE4tX4kwhNw",
  },
  {
    id: 4,
    title: "Blue Lullaby",
    img: "./Images/BlueLyllabyCover.jpg",
    spotifyUrl:
      "https://open.spotify.com/album/2yYVQSvioUyc6LOIruv3Ou?si=TmdLmOA-Rt-2Gcwyik8LUA",
  },
  {
    id: 5,
    title: "Spotify Sessions",
    img: "./Images/SpotifySessionsCover.jpg",
    spotifyUrl:
      "https://open.spotify.com/album/0rpYUAMj7cXOOuNLlKJ1MR?si=-j7OfxLQQtG3GiSAcMWlSw",
  },
    {
    id: 6,
    title: "Spotify Sessions",
    img: "./Images/SpotifySessionsCover.jpg",
    spotifyUrl:
      "https://open.spotify.com/album/0rpYUAMj7cXOOuNLlKJ1MR?si=-j7OfxLQQtG3GiSAcMWlSw",
  },
    {
    id: 7,
    title: "Spotify Sessions",
    img: "./Images/SpotifySessionsCover.jpg",
    spotifyUrl:
      "https://open.spotify.com/album/0rpYUAMj7cXOOuNLlKJ1MR?si=-j7OfxLQQtG3GiSAcMWlSw",
  },
];

export default function AlbumCarousel({ id }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, albums.length - visibleCount)
    );
  };

  return (
    <Global  id={id}>
        <HeroSection>
            <MobileImage src="/Images/groupe.png" alt="Groupe" />
            <HeroContent>
                <HeroTitle>À propos du groupe</HeroTitle>
                <HeroParagraph>
                Wolf Alice est un groupe britannique de rock alternatif, formé à Londres.
                </HeroParagraph>
                <HeroParagraph>
                    Mélangeant grunge, shoegaze et folk, ils marquent les esprits par leur son puissant et la voix singulière d’Ellie Rowsell.
                </HeroParagraph>
            </HeroContent>
    </HeroSection>

        <MiniGlobal>
            <IntroSection>
                    <IntroImage src="/Images/Bag.png" alt="groupe" />
                    <IntroText>
                    <h2>Le nouvel album - The Clearing</h2>
                    <p>
                        Le retour lumineux d’un groupe en pleine réinvention. <br /> <br />
                        Ce quatrième album studio marque un virage sonore: plus apaisé mais toujours intense, il troque les guitares abrasives de leurs débuts pour des textures soft rock inspirées des années 70.
                    </p>
                    </IntroText>
            </IntroSection>
        
        <Title>(Re)découvrez les premiers albums</Title>

        <Carousel>
            <NavButton onClick={prev} disabled={startIndex === 0}>
            {"<"}
            </NavButton>

            <AlbumList>
            {albums
                .slice(startIndex, startIndex + visibleCount)
                .map((album) => (
                <AlbumLink
                    key={album.id}
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AlbumCover src={album.img} alt={album.title} />
                    <PlayButton aria-label={`Play ${album.title}`}>▶</PlayButton>
                </AlbumLink>
                ))}
            </AlbumList>

            <NavButton
            onClick={next}
            disabled={startIndex >= albums.length - visibleCount}
            >
            {">"}
            </NavButton>
        </Carousel>
        
    </MiniGlobal>
    <BlogWrapper>
        <BlogHeading>Blog</BlogHeading>
        <BlogGrid>
          <Block>
            <BlogDate>Publié le 3 juin 2025</BlogDate>
            <BlogExcerpt>
              Dans Les Coulisses de The Clearing – Une Exploration Sonore
              Intime
            </BlogExcerpt>
          </Block>
          <Block>
            <BlogDate>Publié le 10 juin 2025</BlogDate>
            <BlogExcerpt>
              Dans Les Coulisses de The Clearing – Une Exploration Sonore
              Intime
            </BlogExcerpt>
          </Block>
        </BlogGrid>
      </BlogWrapper>
    </Global>
    
  );
}

// Styled Components
const Global = styled.div`
`;
// backgroundImage et texte au dessus
const HeroSection = styled.section`
  background-image: url("/Images/groupe.png");
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: 80vh;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  @media (max-width: 768px) {
    background-image: none;
    height: auto;
    padding: 0;
    flex-direction: column;
    &::before {
    
    background: none;
    z-index: 0;
  }
  }
`;


const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  @media (max-width: 768px) {
    width:80%;
    padding: 20px;
    
  }
`;

const HeroTitle = styled.h1`
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  margin: 0;


  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const MobileImage = styled.img`
  display: none;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Image et texte 
const MiniGlobal = styled.div`
  background: #2F0101;
  padding: 3rem 1rem;
  font-family: 'Lato', sans-serif;
  color: #fff;
  width:100%;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    background: none;
  }
`;
const IntroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width:100%;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IntroImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IntroText = styled.div`
  width: 50%;
  color: #fff;
   @media (max-width: 768px) {
  width: 100%;

    text-align:left;
  }

  h2 {
    font-family: 'League Spartan', sans-serif;
    font-size: 2rem;
    margin-bottom: 1rem;
    color:#F3E4B2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-family: 'Lato', sans-serif;

  }
`;

// caroussel 
const Title = styled.h2` 
text-align: center; 
margin: 4rem 0; 
`; 

const Carousel = styled.div` display: flex; 
align-items: center; 
width: 100%; 
max-width: 100%; 
flex-wrap: nowrap; 
box-sizing: border-box; `; 
const AlbumList = styled.div` 
display: flex; 
overflow: hidden; 
flex: 1; gap: 2rem; 
@media (max-width: 768px) {
  width: 100%;
  gap:1rem;
  }
`; 
const AlbumLink = styled.a` 
position: relative; 
display: block; 
width: 100%; 
height: 120px; 
border-radius: 10px; 
overflow: hidden; 
box-shadow: 0 0 8px #000; 
@media (max-width: 768px) {
  width: 100%;
  gap:0;
  }
`; 

const AlbumCover = styled.img` 
width: 100%;
 height: 100%;
  object-fit: cover; 
  `; 

  const PlayButton = styled.button` 
  position: absolute; 
  top: 8px; 
  right: 8px; 
  background-color: rgba(0, 0, 0, 0.6); 
  border-radius: 50%; 
  border: none; 
  padding: 6px; cursor: pointer;
   color: #fff; `; 

   const NavButton = styled.button`
    background-color: #5a2a2a; 
    border: none; color: #f0d37f; 
    font-size: 1.5rem; 
    padding: 0.2rem 0.6rem; 
    cursor: pointer; 
    user-select: none; 
    border-radius: 4px; 
    margin: 0 0.5rem; 
    &:disabled { opacity: 0.3; cursor: not-allowed; } 
    `;

// blog
const BlogWrapper = styled.div`
  padding: 2rem;
  font-family: "Lato", sans-serif;
`;

const BlogHeading = styled.p`
  margin-bottom: 2rem;
  font-size: 2.1rem;
  color: #ffffff;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
`;

const Block = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 8px;
  width: 40%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BlogDate = styled.div`
  background-color: #6d1a1a;
  width: 60%;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
`;

const BlogExcerpt = styled.p`
  color: #000;
  text-align: left;
`;
