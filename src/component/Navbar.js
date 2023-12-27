import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import "./Style.css"
import { Link } from 'react-router-dom';
function ColorSchemesExample() {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated } = useAuth0();


  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>

          <Nav className="me-auto">
            <Link to='/'>
              <Nav.Link className='text-light mt-3 fw-bold' href="#home" to>Home</Nav.Link>
            </Link>
            <Link to='/about'>
              <Nav.Link className='text-light mt-3 ms-3 fw-bold' href="#features">About-us</Nav.Link>
            </Link>
            <Link to='/contact'>
              <Nav.Link className='text-light mt-3 ms-3 fw-bold' href="#pricing">Contact</Nav.Link>
            </Link>

            {
              isAuthenticated ? (
                <>
                  <button className='fw-bold text-white ' id='user'>
                    <p className=' mt-3 me-2'>{isAuthenticated && <p>{user.email}</p>}</p>
                  </button>
                  <button id='log-out' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>

                </>
              ) : (

                <button className='fw-bold text-white' id='log-in' onClick={() => loginWithRedirect()}>Log In</button>
              )
            }

          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;