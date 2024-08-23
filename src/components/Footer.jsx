import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from 'mdb-react-ui-kit';
import  './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-5">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Conecte as nossas redes sociais:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
          </div>
        </section>

        <section>
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img className='img' 
                  src='https://logo-maker-api.s3.us-west-2.amazonaws.com/projects/66c6aee22b328ba8a69c7135/thumbnail.jpg?AWSAccessKeyId=AKIA6LFXYJ6B6OZF6P5X&Expires=1724422110&Signature=IDOlKZwHACfKL3QgAkP%2BbJOOF0s%3D'
                  />
                </h6>
                <p>
                  Somos um Petshop de adoção de Cães e Gatos com serviços veterinários, de origem da região Paraibana de Guarabira.
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Brasil, BR PB, GBA
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  petsadoption@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  55-(83)9-9314-3978
                </p>
              </MDBCol> 
            </MDBRow>
          </MDBContainer>
        </section>
        
        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2024 PetsAdoption.
        </div>
      </MDBFooter>
    </footer>
  );
};

export default Footer;
