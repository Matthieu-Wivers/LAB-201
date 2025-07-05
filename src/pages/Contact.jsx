import React from 'react';

const Contact = () => {
    return (
          <ContactSection>
                  <LeftContent>
                    <p>Une question ? Une envie de parler musique ?
                      Envoyez-nous un petit mot ou écrivez à notre équipe.
                      </p>
                    <p>Pour toute demande presse, collaboration ou partenariat, 
                      contactez-nous ici :contact@wolfalice.com
                      </p>
                  </LeftContent>

                  <RightForm>
                    <Form>
                      <Input type="text" placeholder="Nom" required />
                      <Input type="email" placeholder="Email" required />
                      <Textarea placeholder="Message" rows="5" required />
                      <Button type="submit">Envoyer</Button>
                    </Form>
                  </RightForm>
                </ContactSection>

    );
};

export default Contact;