import React from 'react'
import { Navbar, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {

}


export const NavigationBar: React.FC<NavbarProps> = ({}) => {
  const route = useNavigate(); 
    return (
    <>
       <Navbar bg='dark'>
          <Container>
            <Navbar.Brand onClick={() => route("/")} style={{color: 'white', cursor: 'pointer'}}>Messages</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse style={{color: 'white', cursor: 'pointer'}} onClick={() => {
                localStorage.removeItem("token"); 
                route("/login"); 
            }} className="justify-content-end">
              Logout
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>);
}