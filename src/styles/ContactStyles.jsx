import styled from "styled-components";

export const ContactSection =styled.section`
display: flex;
justify-content: space-between;
gap: 4rem;
padding: 3rem 2rem;
background-color:#2F0101;
`;

export const LeftContent = styled.div`
  flex: 1;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.3rem;
  color: #fff;


  p {
    margin-bottom: 2rem;
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
export const Input = styled.div`
padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #E5B85A;
  border-radius: 6px;
`;
export const Textarea = styled.textarea`
 padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 2px solid #E5B85A;
  border-radius: 6px;
  resize: vertical;
`;
export const Button = styled.button`
  background-color: #E5B85A;
  color: white;
  margin: auto;
  padding: 0.9rem 1.4rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
`;