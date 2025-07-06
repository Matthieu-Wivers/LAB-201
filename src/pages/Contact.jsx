import React from 'react';
import {
  ContactSection,
  ContactForm,
  LeftContent,
  RightForm,
  Form,
  Row,
  Input,
  Textarea,
  Button,
} from '../styles/ContactStyles';

export default function Contact() {
  return (
    <ContactSection>
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
    </ContactSection>
  );
}
