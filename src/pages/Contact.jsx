import React from 'react';
import {
  ContactSection,
  BackgroundContact,
  ContactForm,
  LeftContent,
  RightForm,
  Form,
  Row,
  Input,
  Textarea,
  Button,
  UnderContact,
  Text,
  Socials,
} from '../styles/ContactStyles';
import {FaInstagram, FaTiktok, FaYoutube, FaSpotify} from 'react-icons/fa';


export default function Contact() {
  return (
    <ContactSection>
      <BackgroundContact>
      <h2>
        Restons en Contact!
      </h2>
      <ContactForm>
      <LeftContent>
        <p>Une question ? 
          Une envie de  <br />parler musique ? <br />
          Envoyez-nous un petit mot ou <br /> écrivez à notre équipe.</p>
        <p>Pour toute demande presse, <br />
          collaboration ou partenariat, <br />
          contactez-nous ici :contact@wolfalice.com</p>
      </LeftContent>

      <RightForm>
        <Form>
          <Row>
          <Input type="text" placeholder="Nom" required />
          <Input type="email" placeholder="Email" required />
          </Row>
          <Textarea placeholder="Message" rows="5" required />
          <Button type="submit">Envoyer</Button>
        </Form>
      </RightForm>
      </ContactForm>
</BackgroundContact>
      <UnderContact>
        <Text>
          Et suivez-nous sur les réseaux pour toutes les actus 🎸
        </Text>
      <Socials>
                 <a href="#"><FaInstagram /></a>
                <a href="#"><FaTiktok /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaSpotify /></a>
       </Socials>
       </UnderContact>
    </ContactSection>
  );
}
