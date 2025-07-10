import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
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
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact({id}) {

  const FormRef = useRef();

  const sendEmail =(e) =>{
    e.preventDefault();

    emailjs.sendForm(
      // récupération des coordonnées du Dashboard(emailjs)
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     FormRef.current,
     import.meta.env.VITE_EMAILJS_USER_ID
    ).then(
      () =>{
        toast.success("✅ Message envoyé !");
        FormRef.current.reset();
      },
      (error)=>{
        alert("Erreur : " + error.text);
      }
    );
  };
  return (
    <ContactSection id={id}>
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
        <Form ref={FormRef} onSubmit={sendEmail}>
          <Row>
          // récupération des valeurs des champs du Template(emailjs)
          <Input type="text" name='user_name' placeholder="Nom" required />
          <Input type="email" name='user_email' placeholder="Email" required />
          </Row>
          <Textarea name = "message"placeholder="Message" rows="5" required />
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
                 <a href="https://www.instagram.com/wolfaliceband/" target="_blank"><FaInstagram /></a>
                <a href="https://www.tiktok.com/@wolfalicemusic" target="_blank"><FaTiktok /></a>
                <a href="https://www.youtube.com/user/wolfalicevideos" target="_blank"><FaYoutube /></a>
                <a href="https://open.spotify.com/intl-fr/artist/3btzEQD6sugImIHPMRgkwV" target="_blank"><FaSpotify /></a>
       </Socials>
       </UnderContact>
       <ToastContainer position='bottom-right' autoClose={3000} hideProgressBar/>
    </ContactSection>
  );
}
