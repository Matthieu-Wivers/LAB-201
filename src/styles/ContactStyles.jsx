import styled from 'styled-components';

// Container principal
export const ContactSection = styled.section`


`;
// background image styles
export const BackgroundContact = styled.div`
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  z-index: 0;

  h2 {
    text-align: center;
    color: #E5B85A;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }
  /* Pseudo-élément pour le fond flouté */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('/public/images/contact.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(6px);
    transform: scale(1.1); 
    z-index: 0;
  }

  /* Contenu au-dessus du flou */
  > * {
    position: relative;
    z-index: 2;
  }

`;
  /* paragraphe et form*/
export const ContactForm =styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 3rem 2rem;
    @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.3rem;
  color: #fff;
  width: 50%;
  p {
    margin-bottom: 1.5rem;       /* plus d'espace entre les paragraphes */
    padding: 10px 40px;
    text-align: left;
    line-height: 1.2;
  }
    @media (max-width: 768px) {
    order:1;
    width:100%;
    p{
    padding: 0;

    }
  }
  `;

export const RightForm = styled.div`
  flex: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Row = styled.div`
  display: flex;
  width:100%;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #E5B85A;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #E5B85A;
  border-radius: 6px;
  resize: vertical;
`;

export const Button = styled.button`
  background-color: #2f0101;
  color: black;
  padding: 0.9rem 1.4rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
background: linear-gradient(to right, #E5B85A, #F3E4B2, #E5B85A, #F3E4B2);
    width:30%;
    margin:auto;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
 
`;

  /* Texte et réseaux*/
export const UnderContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;     // centre horizontalement
  justify-content: center;
  background-color: #160000;
  gap: 1rem;
  /* margin-top: 2rem; */
  padding: 20px;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #F3E4B2;
  margin-top: 2rem;

`;

export const Socials = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 2.5rem;
  margin-bottom: 2rem;


  a {
    color: #f3c01a;

    &:hover {
      color: #65000B;
    }
  }
`;



