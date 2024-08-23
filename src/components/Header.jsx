import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <img className='img'
            src="https://logo-maker-api.s3.us-west-2.amazonaws.com/projects/66c6aee22b328ba8a69c7135/thumbnail.jpg?AWSAccessKeyId=AKIA6LFXYJ6B6OZF6P5X&Expires=1724422110&Signature=IDOlKZwHACfKL3QgAkP%2BbJOOF0s%3D" 
           
          />
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link href="#home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#sobre">
                Sobre
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
